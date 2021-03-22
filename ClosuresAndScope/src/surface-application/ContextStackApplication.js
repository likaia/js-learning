// var name = "神奇的程序员";
// function changeName() {
//   var name = "大白";
//   function f() {
//     return name;
//   }
//   return f();
// }
// const result = changeName();
// console.log(result);

var name = "神奇的程序员";
function changeName() {
  var name = "大白";
  function f() {
    return name;
  }
  return f;
}
const result = changeName()();
console.log(result);
