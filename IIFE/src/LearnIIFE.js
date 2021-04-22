// (function() {
//   // 块级作用域
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
// })();
// console.log(i);

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);
// const getOrderId = (function() {
//   let count = 0;
//   return function() {
//     ++count;
//     return `id_${count}`;
//   };
// })();
// console.log(getOrderId()); // id_1
// console.log(getOrderId()); // id_2
// console.log(getOrderId()); // id_3
// console.log(getOrderId()); // id_4

// function test(){
//   console.log("测试");
// }(); // 报错 SyntaxError: Unexpected token ')'
// +(function test() {
//   console.log("测试");
// })();
// test();
// var test = function() {
//   console.log("测试");
// };

// test(); // 测试
// function test() {
//   console.log("测试");
// }
// test(); // 测试

// (function(val) {
//   console.log(val);
// })("我是自执行匿名函数");

(function(val) {
  console.log(val);
})("我是匿名函数的参数");
