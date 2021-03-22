// 作用域链
// var name = "神奇的程序员";
//
// function changeName() {
//   console.log(arguments);
//   name = "大白";
// }
//
// changeName();
// console.log(name);
// 作用域链的查找
var name = "神奇的程序员";

function changeName() {
  let insideName = "大白";

  function swapName() {
    let tempName = insideName;
    insideName = name;
    name = tempName;

    // 可以访问tempName、insideName、name
  }
  // 可以访问insideName、name
  swapName();
}
// 可以访问name
changeName();
console.log(name);
