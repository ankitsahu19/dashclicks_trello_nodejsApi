const express = require('express'),
     http = require('http');

const hostname = 'localhost';
const port = 3000;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());



const userRouter = require('./routes/users');

app.use('/users', userRouter);
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
