// var events = require('events');
//
// var myEmitter = new events.EventEmitter();
//
// //官方demo https://nodejs.org/api/events.html
// //on 用来注册监听
// myEmitter.on('someEvent',function(mssg){
//   console.log(mssg);
// });
//
// //emit用来触发监听
// myEmitter.emit('someEvent','the event was emitted');


var events = require('events');
var utils =require('util');
var Person = function(name){
  this.name = name;
};
utils.inherits(Person,events.EventEmitter);
var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var hehe = new Person('hehe');
var person = [james,mary,ryu];
person.forEach(function(person){
  person.on('speak',function(mssg){
    console.log(person.name + ' said: '+mssg);
  });
});

james.emit('speak','hey judes');
james.emit('write','hey judes');
mary.emit('speak','marry ');
ryu.emit('speak','ryu');
hehe.emit('speak','hehe');
