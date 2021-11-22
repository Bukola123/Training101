const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json);
app.use(express.static("express"));

app.use('/', function(req, res){
    res.sendFile(path.join(_dirname+'/express/index.html'));
    //__dirname: it will resolve to your project folder
})

const server = http.createServer(app);
const port = 5000;
server.listen(port);

console.debug('Server listening on port'+ port)