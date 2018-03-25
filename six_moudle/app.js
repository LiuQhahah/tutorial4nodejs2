//调用counter.js中的方法，new一个对象
var stuff = require('./stuff');

console.log(stuff.counter(['heheh','haha','xixi']));
console.log(stuff.adder(1,2));
console.log(stuff.pi);
