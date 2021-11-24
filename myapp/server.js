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


const express = require('express');
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
        console.log("Record insert successfully");
    });
    return res.redirect('./index.js')
});

app.listen( 7000, () => {
    console.log('Example app listening on port 7000!');
});
