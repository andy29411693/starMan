
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendfile('./views/index.html');
});

app.get('/starMan', function(req, res) {
    res.sendfile('./views/game1.html');
});
 
 
app.listen(port);