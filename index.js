var connect = require('connect');
var serveStatic = require('serve-static');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

connect().use(serveStatic(__dirname)).listen(port);
console.log(__dirname);