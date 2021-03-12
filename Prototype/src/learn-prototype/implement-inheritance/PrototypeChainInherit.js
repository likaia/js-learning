/**
 * 原型链继承
 * @constructor
 */
function Super() {
  this.property = true;
}
Super.prototype.getSuperValue = function() {
  return this.property;
};

function Sub() {
  this.subProperty = false;
}

// Sub原型指向Super实例，constructor被重写，指向Super
Sub.prototype = new Super();
Sub.prototype.getSubValue = function() {
  return this.subProperty;
};

let sub = new Sub();
console.log("获取Super的属性值", sub.getSuperValue());
console.log(
  "sub实例的原型对象等于Sub构造函数的原型对象",
  sub.__proto__ === Sub.prototype
);
console.log(
  "Sub构造函数的原型对象的原型对象等于Super构造函数的原型对象",
  Sub.prototype.__proto__ === Super.prototype
);
console.log(
  "Sub构造函数的原型对象constructor指向Super的构造函数",
  Sub.prototype.constructor === Super
);

/**
 * 举例说明存在的问题：原型对象上的引用类型会被所有实例共享
 * @constructor
 */
// function Super() {
//     this.list = ["a","b","c"];
// }
//
// function Sub() {
//
// }
// Sub.prototype = new Super();
// const sub1 = new Sub();
// sub1.list.push("d");
// console.log(sub1.list);
// const sub2 = new Sub();
// console.log(sub2.list);
