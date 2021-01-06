const express = require('express');
const bodyParser = require('body-parser');
const data = require('../myJsonFile0.json');


const userRouter = express.Router();

userRouter.use(bodyParser.json());
const mongoose = require('mongoose');

const users = require('../models/users');


userRouter.route('/')
.get((req,res,next) => {                                           //  http://localhost:3000/users for all users
    users.find({})
    .then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {                                        // http://localhost:3000/users add user data
    users.create(req.body)
    .then((user) => {
        console.log('user Created ', user);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    }, (err) => next(err))
    .catch((err) => next(err));
    
})
.put((req, res, next) => {                                           // Not Supported
    res.statusCode = 403;
    res.end('PUT operation not supported on User Please insert id for Update'); 
})
.delete((req, res, next) => {                                       // Delete All users
    users.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

userRouter.route('/:id').put((req, res, next) => {                    //  http://localhost:3000/user/5ff5d5970af7c4569855a848 edit user 
    users.findByIdAndUpdate (req.params.id, {
        $set: req.body
    }, { new: true })
    .then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    users.findByIdAndRemove(req.params.id)                           //  http://localhost:3000/user/5ff5d5970af7c4569855a848 delete user 
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = userRouter;