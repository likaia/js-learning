// // 函数作用域
// function getResult(readingVolume, likes) {
//   var total = readingVolume + likes;
//   globalResult = total;
//   return total;
// }
//
// let result = getResult(200, 2);
// console.log("globalResult = ", globalResult);
// console.log(total);

// 变量提升
// console.log(name);
// var name = "神奇的程序员";
// function getName() {
//   console.log(name);
//   var name = "大白";
//   return name;
// }
// getName();

// 块级作用域
// let result = true;
// if (result) {
//   let a;
// }
// console.log(a);
//
// while (result) {
//   let b;
//   result = false;
// }
// console.log(b);
//
// function foo() {
//   let c;
// }
// console.log(c);
//
// {
//   let d;
// }
// console.log(d);
//
// let a = 10;
// let a = 11;
// console.log(a);
//
// var b = 10;
// var b = 11;
// console.log(b);

// 常量的声明
// const name = "神奇的程序员";
// const obj = {};
// obj.name = "神奇的程序员";
// name = "大白";
// obj = { name: "大白" };
// const obj1 = Object.freeze({ name: "大白" });
// obj1.name = "神奇的程序员";
// obj1.age = 20;
// console.log(obj1.name);
// console.log(obj1.age);
//
// var value = "global";
//
// // 例子1
// (function() {
//   console.log(value); // 报错：ReferenceError: Cannot access 'value' before initialization 临时死区(TDZ) 原因，let、const声明的变量会放到TDZ里，查找时会先从当前上下文里找从tdz里找到了value，所以它抛出啦错误
//
//   let value = "local";
// })();
//
// // 例子2
// {
//   console.log(value); // 报错，原因同上
//
//   const value = "local";
// }

// var funcs = [],
//   object = { a: 1, b: 1, c: 1 };
// for (const key in object) {
//   funcs.push(function() {
//     console.log(key);
//   });
// }
//
// funcs[0](); // a 这是因为在 for in 循环中，每次迭代不会修改已有的绑定，而是会创建一个新的绑定。

// var funcs = [];
// for (const i = 0; i < 10; i++) {
//   funcs[i] = function() {
//     console.log(i);
//   };
// }
// funcs[0](); // 报错：Assignment to constant variable. 虽然每次都创建了一个新的变量，然而我们在迭代中(i++)尝试修改const声明的值

// var s2 = 10;
// function fn3() {
//   s2 += 10;
//   console.log(s2); // NaN 在函数上下文中找到了s2的声明，但是它是在未声明之前调用的，值为undefined，因此undefined+=10的值为NaN
//   const aa = "2";
//   var s2 = 20;
// }
// fn3();

// let obj = {
//   length: "凡科建站",
//   exeFn: (function(length) {
//     return function() {
//       console.log(this.length);
//       console.log(length);
//     };
//   })()
// };
//
// const exeFn = obj.exeFn();
// console.log(exeFn.length);

/**
 * eventLoop执行分析：
 * 第1轮宏任务：
     console.log("凡科建站") // 1 executor函数中的同步代码会立即执行
     setTimeout加入宏任务队列
     .then加入微任务队列
     main（）函数声明
     console.log(typeof main())  优先执行main函数，函数内的console.log("凡科营销") // 2 同步代码，立即执行
     await Promise.all([p1, p2]) // 加入宏任务队列，阻塞其后面的同步代码
     console.log(typeof main()) // 3 最后，执行type的值
     开始读取微任务队列：
     .then出队 // 4. 执行console.log("凡科公众号")

   第2轮宏任务：
   setTimeout从宏任务队列出队 // 5. 执行console.log("凡科商城");
   await Promise.all([p1, p2]) 从宏任务出队 // 6. 执行console.log(await Promise.all([p1, p2]));
   最后，mian函数内部的await执行完毕，阻塞结束，紧跟其后的同步的代码立即执行// 7. console.log("凡科自媒体");


 * @type {Promise<unknown>}
 */
const p1 = new Promise(resolve => {
  console.log("凡科建站"); // 1
  setTimeout(() => {
    resolve("凡科小程序");
    console.log("凡科商城"); // 5
  });
});

const p2 = Promise.resolve().then(() => {
  console.log("凡科公众号"); // 4
  return "凡科网";
});

async function main() {
  console.log("凡科营销"); // 2
  console.log(await Promise.all([p1, p2])); // 6
  console.log("凡科自媒体"); // 7
}

console.log(typeof main()); // 3
