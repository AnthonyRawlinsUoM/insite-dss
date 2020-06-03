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
const sqlite3 = require('sqlite3').verbose();

require('epipebomb')();

console.log('Attempting to establish schema!');

let db = new sqlite3.Database('database/web_frost_job_queue.sqlite');

db.run('CREATE TABLE IF NOT EXISTS "job"("id" integer PRIMARY KEY, "name" text NOT NULL, "descr" text NOT NULL, "uuid" text NOT NULL, "submitter_name" text NOT NULL, "submission_time" datetime NOT NULL, "submitter_email" text NOT NULL, "weather_machine_kind" integer NOT NULL, "fuel_machine_kind" integer NOT NULL, "planburn_target_perc" integer NOT NULL, "regsim_duration" integer NOT NULL, "num_replicates" integer NOT NULL, "harvesting_on" boolean NOT NULL)');

db.run('CREATE TABLE IF NOT EXISTS "job_state"("id" integer, "status" text NOT NULL, "simulation_start_time" datetime, "post_proc_start_time" datetime, "simulation_results_dir_path" text,  "post_proc_results_dir_path" text,  "job_failure_time" datetime, "job_completion_time" datetime, "job_failure_error_message" varchar)');

db.run('CREATE TABLE IF NOT EXISTS "job_to_jobstate"("id" integer NOT NULL, "jobid" integer NOT NULL)');

db.close();

console.log('Schema established!');

app.use(express.static(path.join(__dirname, '/INSITE')));

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
  res.sendFile(path.join(__dirname, '/dist/INSITE/index.html'))
});

const port = process.env.PORT || '8181';
app.set('port', port);

const host = process.env.HOST || 'localhost';
app.set('host', host);

const server = http.createServer(app);
const sioc = require('socket.io-client');
const io = socketIO(server);

// io.adapter(redisAdapter({
//   host: 'mq',
//   port: 6379
// }));

let sequenceNumberByClient = new Map();


function passToGlaciator(params) {
    console.log('Attempting to launch glaciator with ...');
    console.log(...params);
    let child = execFile('executable/GlaciatorLauncher.sh', [...params ], (err, stdout, stderr) => {
        if (err) {
            throw err;
        }
        console.log(stdout);
    });
}

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
    if(db) {
      db.close();
    }
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

        let db = new sqlite3.Database('database/web_frost_job_queue.sqlite');

        let stmt = db.prepare(`INSERT into job VALUES(, "${job.name}", "${job.descr}", "${job.uuid}", "${job.submitter_name}", "${job.submission_time}", "${job.submitter_email}", ${job.weather_machine_kind}, ${job.fuel_machine_kind}, ${job.planburn_target_perc.valueOf()}, ${job.regsim_duration.valueOf()}, ${job.num_replicates.valueOf()}, "${job.harvesting_on}")`);

        try {
          stmt.run(job);
          stmt.finalize();
          socket.emit('insert-success', "OK");
        } catch(e) {
          console.error(e);
          console.log(stmt);
          socket.emit('insertion-error', {
            error: e,
            sql: stmt
          })
        } finally {
          db.close();
        }
      }

    // Write the XML
    // let out_xml = js2xmlparser.parse("glaciator_parameters", job);
    // console.log(out_xml);
    // let out_name = job.uuid + '.xml';
    // let out_path = path.join(directoryPath, out_name);
    // console.log(out_path);
    // //
    // fs.writeFile(out_path, out_xml, function(err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });
    //
    // passToGlaciator(['--xml', out_name]);
  });


  socket.on('error-list', () => {
    // Status 4 = Errored
    let db = new sqlite3.Database('database/web_frost_job_queue.sqlite');
    let advanced_sql = `SELECT DISTINCT * FROM job, job_state
    WHERE status=4
INNER JOIN job_to_jobstate ON job.id=job_to_jobstate.id AND job_to_jobstate.jobid = job_state.id
ORDER BY job_failure_time, submission_time`;

    db.serialize( function() {
      db.all(advanced_sql, [], (err, rows) => {
        if (err) {
          console.error(err);
          return;
        }
        rows.forEach((row) => {
          console.log(row.name);
        });
        socket.emit('jobs-list', JSON.stringify(rows));
      });
    });
    db.close();
  });

  socket.on('list-jobs', () => {
    console.log('Listing all jobs!');
    let db = new sqlite3.Database('database/web_frost_job_queue.sqlite');
    let q = [];

    // Read the Jobs table from the SQLite DB
    let basic_sql = `SELECT DISTINCT * FROM job ORDER BY submission_time`;
    let advanced_sql = `SELECT * FROM job, job_state
INNER JOIN job_to_jobstate ON job.id=job_to_jobstate.id AND job_to_jobstate.jobid = job_state.id
ORDER BY submission_time, submitter_name`;

    // db.serialize( function() {
    db.all(advanced_sql, [], (err, rows) => {
      if (err) {
        console.error(err);
        return;
      }

      rows.forEach((row) => {
        console.log(row.name);
        socket.emit('jobs-list', JSON.stringify(row));
      });

    });

    db.close();
    // });

    //passsing directoryPath and callback function
    // fs.readdir(directoryPath, function(err, files) {
    //   //handling error
    //   if (err) {
    //     return console.log('Unable to scan directory: ' + err);
    //   }
    //   //listing all files using forEach
    //   files.forEach(function(file) {
    //     // Do whatever you want to do with the file
    //     console.log(file);
    //
    //     fs.readFile(path.join(directoryPath, file), function(err, data) {
    //       if (err) {
    //         return console.log('Reading file failed');
    //       }
    //       console.log('Parsing...');
    //
    //       let json = parser.toJson(data);
    //       let gp = JSON.parse(json);
    //       console.log(gp);
    //       q.push(gp.glaciator_parameters);
    //
    //       // Read the contents of the xml documents in the queue folder
    //       socket.emit('jobs-list', gp.glaciator_parameters);
    //     });
    //   });
    // });
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
  console.log('INSITE Server running on', port);
});
