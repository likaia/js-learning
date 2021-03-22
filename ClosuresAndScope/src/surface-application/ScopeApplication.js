// 作用域提升
// {
//   function foo() {
//     console.log(1111);
//   }
//   foo(); // 2222
//   foo = 1;
//   // 报错：此时foo的值已经是1了，而并非一个函数
//   // console.log(foo());
//   function foo() {
//     console.log(2222);
//   }
//   foo = 2;
//   console.log(foo); // 2
// }
// console.log(foo); // 1

var obj = {
  name: "大白",
  printName: function() {
    console.log(name); // 从全局上下文中找name
  }
};

function getName() {
  let name = "大白"; // 块级作用域，不会提升
  return obj.printName;
}
let name = "神奇的程序员"; // 出现在全局上下文
let printName = getName();
printName(); // 神奇的程序员
obj.printName(); // 神奇的程序员
