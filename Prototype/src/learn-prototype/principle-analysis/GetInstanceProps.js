/**
 * 实例属性的获取顺序
 * @constructor
 */
function Person() {}

Person.prototype.name = "原型上的name属性";
const person = new Person();
person.name = "实例上的name属性";
console.log(person.name); // 实例上的name属性

delete person.name;
console.log(person.name); // 原型上的name属性

delete Person.prototype.name;
console.log(person.name); // undefined

const object = new Object();
object.name = "对象中的属性";
console.log(object.name); // 对象中的属性
console.log(
  "object实例的__proto__指向Object的实例对象",
  object.__proto__ === Object.prototype
);
console.log(
  "Object的原型对象与构造函数相等",
  Object.prototype.constructor === Object
);
