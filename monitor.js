// Executable path
const execFile = require('child_process').execFile;
const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const socketIO = require('socket.io');
const redisAdapter = require('socket.io-redis');
const parser = require('xml2json');
const app = express();
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const js2xmlparser = require("js2xmlparser");
const directoryPath = path.join(__dirname, '/queue');

const { validate } = require('jsonschema');

const { Pool, Client } = require('pg');

const pool = new Pool({
  user: `${process.env.PG_USER}`,
  host: `${process.env.PG_HOST}`,
  database: `${process.env.PG_DATABASE}`,
  password: `${process.env.PG_PASSWORD}`,
  port: `${process.env.PG_PORT}`,
});

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'secret',
//   port: 5432,
// });

// app.use(express.static(path.join(__dirname, '/INSITE')));
app.use(express.static(path.join(__dirname, '/dist/INSITE')));

app.use(function(req, res, next) {
  app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });
  next();
});

app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname, '/INSITE/index.html'))
  res.sendFile(path.join(__dirname, 'dist/INSITE/index.html'))
});

const port = 8181;
app.set('port', port);

const host = `${process.env.WEB}` || '0.0.0.0';
app.set('host', host);

const server = http.createServer(app);
const sioc = require('socket.io-client');
const io = socketIO(server);

let sequenceNumberByClient = new Map();



function validateSchema(job) {
  let validators = [
    check(job.name)
    .isAlphaNumeric(),

    check(job.descr)
    .isAlphaNumeric(),

    check(job.uuid),
    check(job.submitter_name)
    .isAlpha(),

    check(job.submission_time)
    .isDate(),

    check(job.sumitter_email)
    .isEmail(),

    check(job.weather_machine_kind)
    .isNumeric()
    .min(1)
    .max(3),

    check(job.fuel_machine_kind)
    .isNumeric()
    .min(1)
    .max(3),

    check(job.planburn_target_perc)
    .isNumeric()
    .min(0)
    .max(100),

    check(job.regsim_duration)
    .isNumeric(),

    check(job.num_replicates)
    .isNumeric(),

    check(job.harvesting_on).isBoolean()

  ];

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new Error('Validation Failed');

    // return res.status(422).json({ errors: errors.array() });
  }
}

let jobqueue = [];

const glaciatorParametersSchema = require('./glaciatorParametersSchema.json');

io.on('connection', (socket) => {

  /* CONNECTION CODE */
  console.log('Client has connected!');
  console.info(`Client connected [id=${socket.id}]`);

  sequenceNumberByClient.set(socket, 1);

  // when socket disconnects, remove it from the list:
  socket.on('disconnect', () => {
    sequenceNumberByClient.delete(socket);
    console.info(`Client gone [id=${socket.id}]`);
    io.emit('log', 'User (' + socket.id + ') has disconnected');
  });



  socket.on('submission', (job) => {
    console.log('Job submission received!');

    const result = validate(job, glaciatorParametersSchema);

    if (!result.valid) {
      console.error("InputValidationError. Parameters don't match jsonschema.");
        // pass the validation errors to the error handler
        //  the "stack" key is generally the most useful
        socket.emit('validation-error', JSON.stringify({
            errors: result.errors.map(error => error.stack)
        }));
        console.log(job);

      } else {
        console.log('Valid data received.');

        socket.emit('submission-acknowledged', "ACK");

        console.log(job);

        let text = `INSERT INTO "Job"(name, descr, uuid, submitter_name, submission_time, submitter_email, weather_machine_kind, fuel_machine_kind, planburn_target_perc, regsim_duration, num_replicates, harvesting_on) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`
        let values = [
          job.name,
          job.descr,
          job.uuid,
          job.submitter_name,
          job.submission_time,
          job.submitter_email,
          job.weather_machine_kind,
          job.fuel_machine_kind,
          job.planburn_target_perc.valueOf(),
          job.regsim_duration.valueOf(),
          job.num_replicates.valueOf(),
          job.harvesting_on
        ];

        let query = {
          // name: 'insert-submission',
          text: text,
          values: values
        }

        pool
        .query(query)
        .then(res => {
          console.log("SQL SUCCESS!")
          socket.emit('insert-success', res.rows);
        })
        .catch(e => {
          console.error("SQL FAILED: " + e);
          console.error(e.stack);
          socket.emit('insertion-error', {
            error: e,
            sql: query
          });
        });
      }
  });


  socket.on('error-list', () => {
    // Status 4 = Errored

    let query ={
      text: `SELECT DISTINCT * FROM "Job", "JobState"
    WHERE status=4
INNER JOIN "JobToJobState" ON "Job".id="JobToJobState".id AND "JobToJobState".jobid = "JobState".id
ORDER BY job_failure_time, submission_time`
    };

    pool
      .query(query)
      .then(res => {
        console.log("SQL SUCCESS!")
        socket.emit('error-list', res.rows);
      })
      .catch(e => {
        console.error("SQL FAILED: " + e);
        console.error(e.stack);
        socket.emit('list-error', {
          error: e,
          sql: advanced_sql
        });
      });
  });


  socket.on('queued-jobs', ()=> {
    console.log('Listing all jobs!');

    // Read the Jobs table from the SQLite DB
    let query = {
      text: `SELECT DISTINCT * FROM "Job" WHERE id NOT IN (SELECT DISTINCT jobid FROM "JobToJobState") ORDER BY submission_time;`
    };


    pool
      .query(query)
      .then(res => {
        console.log("SQL SUCCESS!")
        socket.emit('jobs-queue', res.rows);
      })
      .catch(e => {
        console.error("SQL FAILED: " + e);
        console.error(e.stack);
        socket.emit('jobs-error', {
          error: e,
          sql: query
        });
      });
    });



  socket.on('list-jobs', () => {
    console.log('Listing all jobs!');

    let query = {
      text: `SELECT * FROM "Job"
INNER JOIN "JobToJobState" ON "Job".id="JobToJobState".id
INNER JOIN "JobState" ON "JobToJobState".jobid = "JobState".id
ORDER BY submission_time, submitter_name`
    };

    pool
      .query(query, [])
      .then(res => {
        console.log("SQL SUCCESS!")
        socket.emit('jobs-list', res.rows);
      })
      .catch(e => {
        console.error("SQL FAILED: " + e);
        console.error(e.stack);
        socket.emit('jobs-error', {
          error: e,
          sql: query
        });
      });
    });

  io.emit('log', 'User with Session ID: ' + socket.id + ' has connected.');

  /* LOGGING CODE */
  // Add
  socket.on('log-entry', (entry) => {
    console.log(entry);
    socket.emit('log', entry);
  });

});

server.listen(port, () => {
  console.log('INSITE Server: running on', port);
})
