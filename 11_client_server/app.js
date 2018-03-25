var http = require('http');
var server = http.createServer(function(req,res){
  //send a response header  to the request

  console.log(req.url);
  res.writeHead(200,{'Content-Type':'text/plain'});

  //MUST be called on each response
  //signal to server that all of response headers and body have been sent,
  //server should consider this message complete
  res.end('Hey ninjas');
});

server.listen(3000,'127.0.0.1');
console.log('listening ....');
