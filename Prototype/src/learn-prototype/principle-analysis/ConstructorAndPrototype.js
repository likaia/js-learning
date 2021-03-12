/**
 * 构造函数与原型的关系
 * @constructor
 */
function Person() {}

console.log(
  "原型对象与构造函数相等: ",
  Person.prototype.constructor === Person
);
