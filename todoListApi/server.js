const express = require("express"),
app = express(),
port = process.env.PORT || 5000;
mongoose = require('mongoose'),
Task = require('./api/models/todoListModel.js'),
bodyParser = require('body-parser');

// Connecting to Mongodb
mongoose.Promise = global.Promise;
mongoose.connect = ('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// importing routes
var routes = require('./api/routes/todoListRoutes.js')
routes(app); //Registring app



app.listen(port);
console.log('todo list RESTful API server started on: ' + port);