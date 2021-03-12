/**
 * 构造函数继承
 * @constructor
 */
function Super() {
  this.list = ["a", "b", "c"];
}

function Sub() {
  Super.call(this);
}
const sub1 = new Sub();
sub1.list.push("d");
console.log("sub1", sub1.list);
const sub2 = new Sub();
console.log("sub2", sub2.list);

/**
 * 存在的问题：无法继承原型对象上的属性与方法
 * @constructor
 */
// function Super() {
//     this.list = ["a","b","c"];
// }
//
// Super.prototype.newList = [];
//
// function Sub() {
//     Super.call(this)
// }
// const sub1 = new Sub();
// console.log("sub1" ,sub1.newList);
