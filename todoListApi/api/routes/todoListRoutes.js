/*Routing refers to determining how an application responds to a client request for a specific endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
Each of our routes has different route handler functions, which are executed when the route is matched.
Below we have defined two basic routes(‘/tasks’, and ‘/tasks/taskId’) with different methods
‘/tasks’ has to methods(‘GET’ and ‘POST’), while ‘/tasks/taskId’ has GET, PUT and DELETE.
As you can see, we required the controller so each of the routes methods can call it’s respective handler function.*/

/*'use strict';
module.exports = function (app){
    var todoList = require('../controllers/todoListController');

    // todoList Routes
app.route('/todos')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

app.route('/todos/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};*/

//New
const express = require('express');
const router = express.Router();

const {
    //list_all_tasks,
    create_a_task,
    //read_a_task,
    //update_a_task,
    //delete_a_task,
} = require('../api/controllers/todoListController.js')

//creating new task
router.post('/create', create_a_task);


module.exports = router;