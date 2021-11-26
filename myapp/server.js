// Using Youtube video
var express = require('express');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://Bukola:12345@cluster0.j8uhq.mongodb.net/local_library?retryWrites=true&w=majority',{useNewUrlParser: true , useUnifiedTopology: true});
//'mongodb://localhost:27017/mydb'

var db = mongoose.connection;
db.on('error',()=> console.log('Error in connecting to Database'));
db.once('open', () => console.log('Connected to Database'))

app.post("/sign_up",(req,res) => {
    
    var firstName = req.body.firstName;
    var email = req.body.email;

    var data = {
        "firstName" : firstName,
        "email": email
    }
    var Schema = mongoose.Schema;

    var data = new Schema(
      {
        firstName: {type: String, required: true, maxLength: 100},
        email: {type: String, required: true, maxLength: 100, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
             
    });

    module.exports = mongoose.model('user_data', data);

    
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
