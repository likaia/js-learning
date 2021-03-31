// 深入理解箭头函数 deconstruction

// function foo(n) {
//   var f = () => arguments[0] + n; // 箭头函数没有arguments，获取的是foo函数的
//   return f();
// }
//
// let res = foo(2);
//
// console.log(res); // 4

// function A() {
//   this.foo = 1;
// }
//
// A.prototype.bar = () => console.log(this.foo); // 箭头函数的this指向全局
//
// let a = new A();
// a.bar(); // undefined

// let res = function pt() {
//   return (() => this.x).bind({ x: "inner" })();
// }.call({ x: "outer" });
//
// console.log(res); // other

// window.name = "window_name";
//
// let obj1 = {
//   name: "obj1_name",
//   print: () => console.log(this.name)
// };
//
// let obj2 = { name: "obj2_name" };
//
// obj1.print(); // window_name 箭头函数无this，箭头函数体内的 this 对象就是定义时所在的对象，而不是使用时所在的对象。
// obj1.print.call(obj2); // window_name 箭头函数无this，所以指向不会改变，它只会执行这个函数

let obj1 = {
  name: "obj1_name",
  print: function() {
    return () => console.log(this.name);
  }
};

let obj2 = { name: "obj2_name" };

obj1.print()(); // obj1_name this指向它外层的普通函数
obj1.print().call(obj2); // obj1_name 返回的是箭头函数引用，所以无法改变this，只会执行函数
obj1.print.call(obj2)(); // obj2_name
