var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var indexstr = buf.toString(fs.readFileSync(index.html));

console.log("My string is: " + indexstr + "\n");


app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

