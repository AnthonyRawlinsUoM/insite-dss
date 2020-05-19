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

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('database.sqlite');

db.run('CREATE TABLE IF NOT EXISTS "job"("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" text NOT NULL, "descr" text NOT NULL, "uuid" text NOT NULL, "submitter_name" text NOT NULL, "submission_time" datetime NOT NULL, "submitter_email" text NOT NULL, "weather_machine_kind" integer NOT NULL, "fuel_machine_kind" integer NOT NULL, "planburn_target_perc" integer NOT NULL, "regsim_duration" integer NOT NULL, "num_replicates" integer NOT NULL, "harvesting_on" boolean NOT NULL)');

db.run('CREATE TABLE IF NOT EXISTS "job_state"("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "status" text NOT NULL, "simulation_start_time" datetime, "post_proc_start_time" datetime, "simulation_results_dir_path" text,  "post_proc_results_dir_path" text,  "job_failure_time" datetime, "job_completion_time" datetime, "job_failure_error_message" varchar)');

db.run('CREATE TABLE IF NOT EXISTS "job_to_jobstate"("id" integer NOT NULL, "jobid" integer NOT NULL)');

db.close();

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

let jobqueue = [];

io.on('connection', (socket) => {

  let db = new sqlite3.Database('database.sqlite');

  /* CONNECTION CODE */
  console.log('Client has connected!');
  console.info(`Client connected [id=${socket.id}]`);

  sequenceNumberByClient.set(socket, 1);

  // when socket disconnects, remove it from the list:
  socket.on('disconnect', () => {
    sequenceNumberByClient.delete(socket);
    console.info(`Client gone [id=${socket.id}]`);
    io.emit('log', 'User (' + socket.id + ') has disconnected');
    db.close();
  });

  socket.on('submission', (job) => {
    console.log('Job submission received!');
    console.log(job);

    socket.emit('submission-acknowledged', "ACK");

    let now = "";

    let stmt = db.prepare(`INSERT into job VALUES('', '${job.name}','${job.descr}','${job.uuid}','${job.submitter_name}','${now}','${job.submitter_email}',${job.weather_machine_kind},${job.fuel_machine_kind},${job.planburn_target_perc},${job.regsim_duration},${job.num_replicates},${job.harvesting_on})`);

    try {
      stmt.run(job);
      stmt.finalize();
    } catch(e) {
      console.err(e);
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

  socket.on('list-jobs', () => {
    console.log('Listing all jobs!');

    let q = [];

    // Read the Jobs table from the SQLite DB
    let sql = `SELECT DISTINCT * FROM job ORDER BY submission_time`;
    let advanced_sql = `SELECT DISTINCT * FROM job ORDER BY submission_time`;

    db.serialize( function() {
      db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
          console.log(row.name);
        });
        socket.emit('jobs-list', JSON.stringify(rows));
      });
    });
    db.close();

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
