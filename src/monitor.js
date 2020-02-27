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
const uuidv4 = require('uuid/v4');
const moment = require('moment');
const js2xmlparser = require("js2xmlparser");

const directoryPath = path.join(__dirname, '/queue');

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

const example = {
     "submitted_at": "Friday January 31 2020",
     "submitted_by": "No-one",
     "email": "anthony.rawlins@unimelb.edu.au",
     "description": "Example only; a place holder",
     "name": "DUMMY FROST RUN",
     "uuid": uuidv4(),

     "parameters": {
         "harvesting_on": "TRUE",
         "harvesting_off": "TRUE",
         "burn_target_per_year": "5",
         "burn_zones": "APZ",
         "simulation_timeframe": "FIFTY",
         "replicates": "TEN",
         "weather": "Observed",
         "fuel": "McFuel"
     },

     "task": {
         "uuid": uuidv4(),
         "progress": "0",
         "status": "PENDING",
         "priority": "1",
         "results": {
             "url": null
          }
      }
  }

let sequenceNumberByClient = new Map();

/*
enum TaskStatus {
  PENDING = "PENDING",
  STARTED = "STARTED",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  RETRY = "RETRY",
  REVOKED = "REVOKED"
}*/
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
    console.log(job);
    passToGlaciator(['--xml', 'uuid.xml']);
    socket.emit('submission-acknowledged', "ACK");
    // Write the XML
    let out_xml = js2xmlparser.parse("glaciator_parameters", job);
    console.log(out_xml);
    let out_name = job.uuid + '.xml';
    let out_path = path.join(directoryPath, out_name);
    console.log(out_path);
    //
    fs.writeFile(out_path, out_xml, function(err) {
      if (err) throw err;
      console.log('Saved!');
    });
  });

  socket.on('list-jobs', () => {
    console.log('Listing all jobs!');

    let q = [];

    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function(err, files) {
      //handling error
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }
      //listing all files using forEach
      files.forEach(function(file) {
        // Do whatever you want to do with the file
        console.log(file);

        fs.readFile(path.join(directoryPath, file), function(err, data) {
          if (err) {
            return console.log('Reading file failed');
          }
          console.log('Parsing...');

          let json = parser.toJson(data);
          let gp = JSON.parse(json);
          console.log(gp);
          q.push(gp.glaciator_parameters);

          // Read the contents of the xml documents in the queue folder
          socket.emit('jobs-list', gp.glaciator_parameters);
        });
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
  console.log('INSITE Server running on', port);
});
