var fs = require('fs');
//api https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
// var readMe = fs.readFileSync('readMe.txt','utf8');
// console.log(readMe);
// fs.writeFileSync('writeMe.txt', readMe);


//移除文件  https://nodejs.org/api/fs.html#fs_fs_unlink_path_callback
// fs.unlink('writeMe.txt');

//创建文件夹，将读取的内容写入到刚刚创建的文件中
//https://nodejs.org/api/fs.html#fs_fs_mkdir_path_mode_callback


// fs.mkdir('stuff',function(){
//   fs.readFile('readMe.txt','utf8',function(err,data){
//   fs.writeFile('./stuff/writeMe.txt',data);
// });
// });
//移除文件，删除文件夹
fs.unlink('./stuff/writeMe.txt',function(){
  fs.rmdir('stuff');
});
