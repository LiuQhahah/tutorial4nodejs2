var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
myReadStream.on('data',function(chunk){
  //console.log('new chunk received:');
  // console.log(chunk);
  //流的写入
  //myWriteStream.write(chunk);
});

  //通过pipes写入
  myReadStream.pipe(myWriteStream);