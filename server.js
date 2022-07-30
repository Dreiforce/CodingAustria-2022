var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./src/");

var server = http.createServer(function(req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
});
server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')