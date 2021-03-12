/**
 * 重写原型对象
 * @constructor
 */
function Person() {}

Person.prototype = {
  name: "神奇的程序员",
  age: "20",
  job: "web前端开发",
  sayName: function() {
    console.log(this.name);
  }
};

console.log(
  "Person的原型对象的构造函数与Person构造函数相等",
  Person.prototype.constructor === Person
);

// 改变constructor的指向
Person.prototype = {
  name: "神奇的程序员",
  age: "20",
  job: "web前端开发",
  sayName: function() {
    console.log(this.name);
  },
  constructor: Person
};
console.log(
  "Person的原型对象的构造函数与Person构造函数相等",
  Person.prototype.constructor === Person
);
