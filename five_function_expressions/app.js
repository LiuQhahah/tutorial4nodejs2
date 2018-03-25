//函数调用的两种方式

// //正常的函数声明
//
// function sayHi(){
//   console.log('hi');
// }
//
// //函数调用
// sayHi();
//
// //function expression
// //通过变量生成函数，调用变量
// var sayBye = function(){
//   console.log('bye');
// };
//
// sayBye();



//函数传参传的是函数

function callFunction(fun){
  fun();
}

var sayBye = function(){
  console.log('bye');
}

callFunction(sayBye);
