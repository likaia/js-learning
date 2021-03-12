/**
 * 实例和原型之间的关系
 * @constructor
 */
function Person() {}

const person = new Person();
// 通过__proto__获取原型对象
// const proto = person.__proto__;
// 通过getPrototypeOf方法获取原型对象
const proto = Object.getPrototypeOf(person);
const result = proto === Person.prototype;
console.log("函数实例的__proto__指针指向构造函数的原型对象", result);
