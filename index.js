var express = require('express');
var server = express();

var port = 8080;

server.get('/', function(request, response){
  response.sendFile('index.html', {root: __dirname + 'practice_then_delete/html/'});
});

server.listen(port, function(){
  console.log('Now listening on port', port);
});