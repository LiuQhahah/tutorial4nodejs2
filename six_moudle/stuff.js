// //传参传的是数组，显示数组元素
//
// var counter = function(arr){
//   return 'There are ' + arr.length + ' elements in this array';
// };
//
// // console.log(counter(['shaun','crystal','ryu']));
//
//
// //如果想将counter设置为可供调用，权限为public
// //module.exports = counter;
//
//
// //导出多个方法
// var adder = function(a,b){
//
//   //注：return 后的符号为esc键，tab键上的
//   return `The sum of the 2 numbers is ${a+b}`;
// };
//
// var pi = 3.142;
//
//
// //导出的也有其他方法
// module.exports.pi = pi;
// module.exports.adder = adder;
// module.exports.counter = counter;

//法2：
// module.exports.pi = 3.142;
// module.exports.adder  = function(a,b){
//   return `The sum of the 2 numbers is ${a+b}`;
// };
// module.exports.counter = function(arr){
//   return 'There are ' + arr.length + ' elements in this array';
// };

//法3:


var counter = function(arr){ return 'There are ' + arr.length + ' elements in this array';
};
var adder = function(a,b){  return `The sum of the 2 numbers is ${a+b}`;};
var pi = 3.142;


module.exports = {
  counter : counter,
  adder : adder,
  pi : pi
};
