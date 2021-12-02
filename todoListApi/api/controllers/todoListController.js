/*In this controller, we would be writing five(5) different functions namely: list_all_tasks, create_a_task, read_a_task, update_a_task, delete_a_task. We will exported each of the functions for us to use in our routes.
Each of these functions uses different mongoose methods such as find, findById, findOneAndUpdate, save and remove.*/

'use strict';

var mongoose = require('mongoose');
Task = mongoose.model('Task');  


exports.list_all_tasks = function(async)(req,res){
    Task.find({}, function(err,task){
        if(err)
            res.send(err);
        res.json(task);       
     });
};

exports.create_a_task = function(async) (req,res){
    var new_task = new Task(req.body);
    new_task.save(function(err,task){
        if(err)
            res.send(err);
        res.json(task);
    
    });
};

exports.read_a_task = function (async)(req,res){
    Task.FindById(req.params.taskId, function(err, task){   
        if(err)
            res.send(err);
        res.json(task)
    })
};

exports.update_a_task = function(async)(req,res){
    Task.FindOneAndUpdate({
        _id: req.params.taskId}, req.body, {new:true}, function(err,task){
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.delete_a_task = function (async)(req,res){
    Task.remove({
        _id: req.params.taskId
    },function (err,task){
        if(err)
            res.send(err)
        res.json({message: 'Task successfully deleted'})
    });
};

