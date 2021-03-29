// // 函数作用域
// function getResult(readingVolume, likes) {
//   var total = readingVolume + likes;
//   globalResult = total;
//   return total;
// }
//
// let result = getResult(200, 2);
// console.log("globalResult = ", globalResult);
// console.log(total);

// 变量提升
// console.log(name);
// var name = "神奇的程序员";
// function getName() {
//   console.log(name);
//   var name = "大白";
//   return name;
// }
// getName();

// 块级作用域
// let result = true;
// if (result) {
//   let a;
// }
// console.log(a);
//
// while (result) {
//   let b;
//   result = false;
// }
// console.log(b);
//
// function foo() {
//   let c;
// }
// console.log(c);
//
// {
//   let d;
// }
// console.log(d);
//
// let a = 10;
// let a = 11;
// console.log(a);
//
// var b = 10;
// var b = 11;
// console.log(b);

// 常量的声明
// const name = "神奇的程序员";
// const obj = {};
// obj.name = "神奇的程序员";
// name = "大白";
// obj = { name: "大白" };
// const obj1 = Object.freeze({ name: "大白" });
// obj1.name = "神奇的程序员";
// obj1.age = 20;
// console.log(obj1.name);
// console.log(obj1.age);

var value = "global";

// 例子1
(function() {
  console.log(value); // 报错：ReferenceError: Cannot access 'value' before initialization 临时死区(TDZ) 原因，let、const声明的变量会放到TDZ里，查找时会先从当前上下文里找从tdz里找到了value，所以它抛出啦错误

  let value = "local";
})();

// 例子2
{
  console.log(value); // 报错，原因同上

  const value = "local";
}
