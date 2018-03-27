var express = require('express');

var app = express();

//设置ejs为view引擎
app.set('view engine','ejs');

app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
  //res.send('this is the home page');
  res.render('index');
});


app.get('/contact',function(req,res){
  // console.log(req.query);
  res.render('contact',{qs:req.query});
});

app.get('/profile/:name', function(req,res){
  //res.send('You requested to see a profile with the id of ' + req.params.id);

  var data = {age:29,job:'ninja',hobbies:['eating','fighting','fishing']};
  res.render('profile',{person: req.params.name,data:data});
});
app.listen(3000);
