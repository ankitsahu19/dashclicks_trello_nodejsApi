const express = require('express');
const bodyParser = require('body-parser');

const taskRouter = express.Router();

taskRouter.use(bodyParser.json());
const mongoose = require('mongoose');

const users = require('../models/users');


taskRouter.route('/:userId')
.get((req,res,next) => {                                           //  http://localhost:3000/task get all task of particular user id
    users.findById(req.params.userId)
    .then((user) => {
        if (user != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            
            res.json(user.tasks)
        }
        else {
            err = new Error('User ' + req.params.userId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {                                        // http://localhost:3000/task add task of particular user id
    users.findById(req.params.userId)
    .then((user) => {
        if (user != null) {
            user.tasks.push(req.body);
            console.log(user)
            user.save()
            
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);                
            }, (err) => next(err));
        }
        else {
            err = new Error('User ' + req.params.userId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
    
})
.put((req, res, next) => {                                          // Not Supported
    res.statusCode = 403;
    res.end('PUT operation not supported on User Please insert id for Update'); 
})
.delete((req, res, next) => {                                      // Delete All Tasks of userId
    users.findById(req.params.userId)
    .then((user) => {
        if (user != null) {
            for (var i = (user.tasks.length -1); i >= 0; i--) {
                user.tasks.id(user.tasks[i]._id).remove();
            }
            user.save()
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);                
            }, (err) => next(err));
        }
        else {
            err = new Error('User ' + req.params.userId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));     
});

taskRouter.route('/:userId/tasks/:taskId').put((req, res, next) => {     // Update Task of userId in TaskId 
    users.findById(req.params.userId)                                    // http://localhost:3000/task/5ff5da02e1b6e7480c4ee1d0/tasks/5ff5da02e1b6e7480c4ee1d2
    .then((user) => {
        if (user != null && user.tasks.id(req.params.taskId) != null) {
        
            user.tasks.id(req.params.taskId).task = req.body.task;                
            
            user.save()
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);                
            }, (err) => next(err));
        }
        else if (user == null) {
            err = new Error('User ' + req.params.taskId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Task ' + req.params.userId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    users.findById(req.params.userId)                                               // Delete Task of userId in TaskId 
    .then((user) => {                                                               // http://localhost:3000/task/5ff5da02e1b6e7480c4ee1d0/tasks/5ff5da02e1b6e7480c4ee1d2
        if (user != null && user.tasks.id(req.params.taskId) != null) {
            user.tasks.id(req.params.taskId).remove();
            user.save()
            .then((user) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);                
            }, (err) => next(err));
        }
        
    }, (err) => next(err))
    .catch((err) => next(err));
});


module.exports = taskRouter;