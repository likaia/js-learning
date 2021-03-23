// console.log("神奇的程序员".length);
// console.log("我是大白".indexOf("白"));
// console.log(new String("神奇的程序员").length);
// console.log(new String("我是大白").indexOf("白"));

// var name = "神奇的程序员";
// var info = new String("神奇的程序员");
// console.log(name == info); // true
// console.log(name === info); // false
//
// var age = 1;
// console.log(typeof age); // number
//
// var info = undefined;
// console.log(typeof info); // undefined
//
// var title = null;
// console.log(typeof title); // object，（null是空对象引用/或者说指针）。
//
// var obj = new Object();
// console.log(typeof obj); // object
//
// var arr = [1, 2, 3];
// console.log(typeof arr); // object
//
// var fn = function() {};
// console.log(typeof fn); // function
//
// console.log([1, 2, 3] instanceof Array); // true
// console.log(/abc/ instanceof RegExp); // true
// console.log({} instanceof Object); // true
// console.log(function() {} instanceof Function); // true

// var o = new Object();
// console.log(o.constructor == Object); // true
// var arr = new Array();
// console.log(arr.constructor == Array); // true

const info = { title: "书", name: "大白" };
console.log(info.hasOwnProperty("title")); // true
