var express = require('express');
var bodyParser = require('body-parser')
var app = express();


var urlencodedParser = bodyParser.urlencoded({ extended: false })

//设置ejs为view引擎
app.set('view engine','ejs');

app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
  //res.send('this is the home page');
  res.render('index');
});


app.get('/contact',function(req,res){
   console.log("get: "+req.query);
  res.render('contact',{qs:req.query});
});

//post方法，和前端的'post'；‘contact’也和前端的'/contact'一一对应
app.post('/contact',urlencodedParser,function(req,res){
  //req从前端获取数据
  console.log(req.body);
  res.render('contact-success',{data:req.body});
});

app.get('/profile/:name', function(req,res){
  //res.send('You requested to see a profile with the id of ' + req.params.id);

  var data = {age:29,job:'ninja',hobbies:['eating','fighting','fishing']};
  res.render('profile',{person: req.params.name,data:data});
});
app.listen(3000);
