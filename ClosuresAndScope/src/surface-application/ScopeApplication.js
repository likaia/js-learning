// 作用域提升
{
  function foo() {
    console.log(1111);
  }
  foo(); // 2222
  foo = 1;
  // 报错：此时foo的值已经是1了，而并非一个函数
  // console.log(foo());
  function foo() {
    console.log(2222);
  }
  foo = 2;
  console.log(foo); // 2
}
console.log(foo); // 1
