/**
 * 组合继承
 * @param name
 * @constructor
 */
function Super(name) {
  this.name = name;
  this.list = ["a", "b", "c"];
}

Super.prototype.getName = function() {
  return this.name;
};
function Sub(name, age) {
  // 构造函数继承，第二次调用父类构造函数
  Super.call(this, name);
  this.age = age;
}
// 原型链继承，第一次调用父类构造函数
Sub.prototype = new Super();
Sub.prototype.constructor = Sub;
Sub.prototype.getAge = function() {
  return this.age;
};

const sub1 = new Sub("神奇的程序员", "20");
sub1.list.push("d");
console.log("sub1", sub1.getName());
console.log("sub1", sub1.getAge());
console.log("sub1", sub1.list);
const sub2 = new Sub("大白", "20");
console.log("sub2", sub2.getName());
console.log("sub2", sub2.getAge());
console.log("sub2", sub2.list);

/**
 * 寄生式组合继承，使用中间函数解决了父类构造函数被执行两次的问题
 * @param name
 * @constructor
 */
// function Super(name) {
//     this.name = name;
//     this.list = ["a", "b", "c"];
// }
//
// Super.prototype.getName = function () {
//     return this.name;
// }
//
// function Sub(name, age){
//     Super.call(this, name);
//     this.age = age;
// }
//
// // 创建一个中间函数，用于继承Super的原型对象
// function F() {
//
// }
// // 将F的原型对象指向Super的原型对象
// F.prototype = Super.prototype;
// // 将Sub的原型对象指向F的实例
// Sub.prototype = new F();
// Sub.prototype.constructor = Sub;
// Sub.prototype.getAge = function () {
//     return this.age;
// }
//
// const sub1 = new Sub("神奇的程序员","20");
// sub1.list.push("d");
// console.log("sub1", sub1.getName());
// console.log("sub1", sub1.getAge());
// console.log("sub1", sub1.list);
// const sub2 = new Sub("大白","20");
// console.log("sub2", sub2.getName());
// console.log("sub2", sub2.getAge());
// console.log("sub2", sub2.list);

/**
 * 修改原型对象指向实现继承
 * 继承原型链方法时，直接将子类构造函数的的原型对象指向改为Super的原型对象
 * @param name
 * @constructor
 */
// function Super(name) {
//     this.name = name;
//     this.list = ["a", "b", "c"];
// }
//
// Super.prototype.getName = function () {
//     return this.name;
// }
//
// function Sub(name, age){
//     Super.call(this, name);
//     this.age = age;
// }
// // 修改Sub构造函数的原型对象指向改为Super的原型对象
// Sub.prototype.__proto__ = Super.prototype;
// Sub.prototype.getAge = function () {
//     return this.age;
// }
//
// const sub1 = new Sub("神奇的程序员","20");
// sub1.list.push("d");
// console.log("sub1", sub1.getName());
// console.log("sub1", sub1.getAge());
// console.log("sub1", sub1.list);
// const sub2 = new Sub("大白","20");
// console.log("sub2", sub2.getName());
// console.log("sub2", sub2.getAge());
// console.log("sub2", sub2.list);

/**
 * 静态方法继承
 * 使用Object.setPrototypeOf方法实现继承父类静态方法
 * @param name
 * @constructor
 */
// function Super(name) {
//     this.name = name;
//     this.list = ["a", "b", "c"];
// }
//
// Super.prototype.getName = function () {
//     return this.name;
// }
//
// // 添加静态方法
// Super.staticFn = function () {
//     return "Super的静态方法";
// }
//
// function Sub(name, age) {
//     // 继承Super构造函数中的数据
//     Super.call(this, name);
//     this.age = age;
// }
//
// // 修改Sub的原型指向
// Object.setPrototypeOf(Sub.prototype, Super.prototype);
// // 继承父类的静态属性与方法
// Object.setPrototypeOf(Sub, Super);
//
// Sub.prototype.getAge = function () {
//     return this.age;
// }
//
// console.log(Sub.staticFn());
// const sub1 = new Sub("神奇的程序员", "20");
// sub1.list.push("d");
// console.log("sub1", sub1.list);
// console.log("sub1", sub1.getName());
// console.log("sub1", sub1.getAge());
// const sub2 = new Sub("大白", "20");
// console.log("sub2", sub2.list);
// console.log("sub2", sub2.getName());
// console.log("sub2", sub2.getAge());
