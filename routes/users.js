const express = require('express');
const bodyParser = require('body-parser');
const data = require('../myJsonFile0.json');
var fs = require('fs');
const { Console } = require('console');

const userRouter = express.Router();

userRouter.use(bodyParser.json());


userRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    console.log(data[0]);
    res.send(JSON.stringify(data));
})
.post((req, res, next) => {
    data.push(req.body);
    res.end('Will add the dish: ' + req.body.id + ' with details: ' + req.body.Name);
    fs.writeFile('myJsonFile0.json', JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('Saved!');
    })
    console.log(data);
    
})
.put((req, res, next) => {
    var name = req.body.Name;
    data.find(data => data.id === req.body.id).Name = name;
    console.log(data);
    fs.writeFile('myJsonFile0.json', JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('Saved!');
    })
    res.statusCode = 200;
    
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

module.exports = userRouter;