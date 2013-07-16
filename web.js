var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = fs.readFileSync("index.html");
var mystr = buf.toString();

//console.log("My string is: " + mystr + "\n");


app.get('/', function(request, response) {
  response.send(mystr);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
