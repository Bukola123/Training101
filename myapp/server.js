/*(console.log('The code below is same with the other but different method used'))
const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
//app.use(express.json);
app.use(express.static("express"));


app.use('/', function(req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
    //__dirname: it will resolve to your project folder
})

const server = http.createServer(app);
const port = 5000;
server.listen(port);

console.debug('Server listening on port'+ port)*/

//(Before editting)
/*const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb');

const db = mongoose.connection;
db.on('error',()=> console.log('Error in connecting to Database'));
db.once('open', () => console.log('Connected to Database'))

app.post("/signup",(req,res) => {
    var firstName = req.body.firstName;
    var email = req.body.email;

    var data = {
        "firstName" : firstName,
        "email": email
    };
    
});



app.get("/",(req, res) => {
    
    res.sendFile(path.join(__dirname,"./public/index.html"))
    var firstName = req.body.firstName;
    var email = req.body.email;

    var data = {
        "firstName" : firstName,
        "email": email
    }
    
    db.collection('users').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record inserted successfully");
    });
    return res.redirect('./index.js')
});

app.get("/",(req,res) => {
        
})

app.listen( 7000, () => {
    console.log('Example app listening on port 7000!');
});*/


//Using the online tutorial

/*var app = express();
const express = require('express');
var mongoose = require("mongoose");
var mongoDB = 'mongodb+srv://Bukola:<12345>@cluster0.j8uhq.mongodb.net/local_library?retryWrites=true&w=majority';

mongoose.connect(mongoDB,{useNewUrlParser: true , useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo connection error:'));
*/

// Using Youtube video
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://Bukola:12345@cluster0.j8uhq.mongodb.net/local_library?retryWrites=true&w=majority',{useNewUrlParser: true , useUnifiedTopology: true});
//'mongodb://localhost:27017/mydb'

const db = mongoose.connection;
db.on('error',()=> console.log('Error in connecting to Database'));
db.once('open', () => console.log('Connected to Database'))

app.post("/signup",(req,res) => {
    var firstName = req.body.firstName;
    var email = req.body.email;

    var data = {
        "firstName" : firstName,
        "email": email
    }
    
    db.collection('users').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record inserted successfully");
    });
    return res.redirect('.public/index.js')
});


app.get("/",(req,res) => {
      res.set({
          "Allow-access-Allow-Origin": '.'
      })
      return res.redirect('./index.html')  
}).listen(3000);

console.log("Listening on PORT 3000");
