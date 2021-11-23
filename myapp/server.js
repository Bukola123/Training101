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
const app = express();
const path = require('path');

app.use(express.static("express"));

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname,"./public/index.html"))
});

app.listen( 7000, () => {
    console.log('Example app listening on port 7000!');
});
