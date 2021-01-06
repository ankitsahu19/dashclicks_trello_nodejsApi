const express = require('express'),
     http = require('http');

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/Trello';
const connect = mongoose.connect(url);
connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });


const hostname = 'localhost';
const port = 3000;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());



const userRouter = require('./routes/users'); // route for user api
const taskRouter = require('./routes/task');  // route for task api
app.use('/users', userRouter);
app.use('/task', taskRouter);
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); 
});
