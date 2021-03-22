// 属性的操作
let person = {};
person.name = "神奇的程序员";
console.log(person.name);

let person1 = "";
person1.name = "神奇的程序员";
console.log(person1.name);

let person2 = new String("");
person2.name = "神奇的程序员";
console.log(person2.name);

// 值的复制
let age = 20;
let tomAge = age;

let obj = {};
let tomObj = obj;
obj.name = "tom";
console.log(tomObj.name); // tom

// 参数的传递
function add(num) {
  num++;
  return num;
}
let count = 10;
const result = add(count);
console.log(result);
console.log(count);

function setAge(obj) {
  obj.age = 10;
  obj = {};
  obj.name = "神奇的程序员";
  return obj;
}
let tom = {};
const result1 = setAge(tom);
console.log("tom.age", tom.age); // 10
console.log("tom.name", tom.name); // undefined
console.log("result1.age", result1.age); // undefined
console.log("result1.name", result1.name); // 神奇的程序员
