/**
 * promise代码与同步代码的执行顺序分析
 *
 * Promise构造函数接受一个excutor函数作为参数
 * excutor 函数有两个函数类型的参数(resolve,reject)，由JavaScript 引擎提供，不用自己部署。
 * @type {Promise<unknown>}
 */
// const promise = new Promise((resolve, reject) => {
//   console.log(1); // 1 构造含函数中的代码会立即执行
//   resolve(); // 3 promise状态由pending转为fulfilled
//   console.log(2); // 1 构造含函数中的代码会立即执行
// });
// promise.then(() => {
//   console.log(3); // 4 promise执行完成，fulfilled状态，触发then回调
// });
// console.log(4); // 2 同步代码执行

/**
 * Promise的执行状态
 * @type {Promise<unknown>}
 */
// const promise = new Promise((resolve, reject) => {
//   resolve("success1"); // 执行resolve函数，promise的的状态会由pending转为fulfilled，promise任务执行完成，触发then回调
//   reject("error"); // 不会执行，因为状态已经是fulfilled状态了
//   resolve("success2"); // 不会执行，因为状态已经是fulfilled状态了
// });
//
// promise
//   .then(data => {
//     console.log(data); // success1
//   })
//   .catch(err => {
//     console.log(err); // 不会触发
//   });

/**
 * Promise原型静态方法考察
 *  1. 如果在then回调中返回一个具体值，那么它默认会调用Promise原型上的resolve方法来包装这个值
 *  2. 如果在then回调中显式调用Promise原型上的方法，那么他就会走显式调用的结果，例如Promise.reject(2)
 *  3. 无论then回调还是catch回调，返回一个具体值，或者不返回任何东西，回调后面还有其他的then回调，会依然执行
 *  4. 无论then回调还是catch回调，显式调用Promise原型上的resolve方法，如果回调后面跟随了then回调则会继续执行，reject方法则走catch方法
 */
// Promise.resolve(1)
//   .then(data => {
//     console.log(data); // 1 执行，原型直接触发resolve方法，状态会改为fulfilled状态
//     return 2;
//   })
//   .catch(err => {
//     console.log(err);
//     return 3; // 不会执行，状态是fulfilled状态
//   })
//   .then(data => {
//     console.log(data); // 2 执行，第一个then回调返回2等同于返回Promise.resolve(2)，状态是fulfilled状态
//   });

/**
 * then回调函数考察
 * 1. then回调函数接受2个参数，参数必须为函数类型
 * 2. then回调函数的参数不为函数类型，则会忽略(穿透)
 */
// Promise.resolve(1)
//   .then(2) // 参数为number类型，会被忽略
//   .then(Promise.resolve(3)) // 参数为Promise类型，会被忽略
//   .then(console.log); // console.log为函数，接受了第一个then的1，于是打印1

/**
 * Promise与同步代码执行顺序考察
 * 执行结果为：3 7 4 1 2 5
 */
// new Promise((resolve, reject) => {
//   console.log(3); // 1. 同步代码，立即执行，打印3
//   let p = new Promise((resolve, reject) => {
//     console.log(7); // 1. 构造函数中的代码为同步的，会立即执行，打印7
//     setTimeout(() => {
//       console.log(5); // 4. 最后，定时器执行，打印5
//       resolve(6); // 会忽略，因为状态已经是fulfilled状态了
//     }, 0);
//     resolve(1); // 2. p执行完成，状态为fulfilled状态
//   });
//   resolve(2); // 3.最外层promise执行完成，状态为fulfilled
//   p.then(arg => {
//     console.log(arg); // 2 p为fulfilled状态，打印1
//   });
// }).then(arg => {
//   console.log(arg); // 3. 最外层Promise状态为fulfilled，打印 2
// });
// console.log(4); // 1. 同步代码，立即执行，打印4

/**
 * 考察Promise.all参数执行顺序
 * 1. 参数中的所有promise实例状态都变成fulfilled，则最终状态为fulfilled
 * 2. 参数中的promise实例有一个状态为rejected，则最终状态为rejected，
 *    第一个状态变为rejected的实例，决定了promise总体的错误原因
 * 3. 参数中的promise实例会按照顺序加入队列，队列中的其他实例会等待队首元素执行完成。
 * @param time
 * @returns {Promise<unknown>}
 */
// function fn(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(time);
//     }, time);
//   });
// }
//
// const exeArr = [fn(2000), fn(300), fn(3000)];
// /**
//  * 参数会按顺序被加入队列：
//  * 1. fn(2000)入队，fn(300)入队，fn(3000)入队。
//  * 2. fn(2000)开始执行，fn(300)、fn(3000)继续等待
//  * 3. fn(2000)执行完成(fulfilled)出队，fn(300)开始执行，fn(3000)继续等待
//  * 4. fn(300)执行完成(fulfilled)出队，fn(3000)开始执行
//  * 5. fn(3000)执行完成(fulfilled)出队，队列清空，Promise的最终状态为fulfilled
//  * 6. 因此最终结果为：[2000， 300， 3000]
//  */
// Promise.all(exeArr).then(results => {
//   console.log(results); // [2000， 300， 3000]
// });

// promise.all使用考察
// const p1 = new Promise((resolve, reject) => {
//   resolve(1);
// });
// const p2 = new Promise((resolve, reject) => {
//   reject("执行失败");
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 3000);
// });
// Promise.all([p1, p2, p3])
//   .then(results => {
//     console.log(results);
//   })
//   .catch(result => {
//     console.log(result);
//   });
