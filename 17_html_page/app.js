var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
  //send a response header  to the request
  console.log(req.url);
  //由于res是一个writable Stream ,因此可以向res写入内容
  res.writeHead(200,{'Content-Type':'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
  myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('listening ....');
