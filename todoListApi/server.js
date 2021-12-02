var express = require("express"),
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

app.get('/',(req,res) => {
  res.json('Welcome to Todolist -Api');
  
})
/* importing routes
var routes = require('./api/routes/todoListRoutes.js'); 
routes(app); //Registring app*/

app.use(express.json({extended: false}));

app.use('/create', require('./routes/todoListRoutes.js'));

/*app.get('/create',(req,res) => {
  //return res.sendStatus('Good')
  res.json('Goodbjdgk')
    
  //res.json('fgfhghg')
  
})*/


app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

  

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);