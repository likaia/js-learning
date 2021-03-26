/**
 * JS执行机制（宏任务与微任务）考察
 * 1. 所有代码作为宏任务进入主线程，开始执行
 * 2. 执行过程中，同步代码会立即执行，宏任务进入宏任务队列，微任务进入微任务队列
 * 3. 当前宏任务执行完成出队，读取微任务队列，有则执行，直至全部执行完
 * 4. 执行浏览器ui进程渲染
 * 5. 检查是否有web worker任务，有则执行
 * 6. 本轮宏任务执行完成，回到第 2 步，继续依此循环，直到宏任务和微任务队列都为空
 *
 * 下述代码：
 * 第一轮事件循环(eventLoop)：
 *    1. console.log("1") 同步代码直接执行
 *    2. setTimeout() 进入宏任务队列，记作：setTimeout1
 *    3. process.nextTick 进入微任务队列，记作：process1
 *    4. new Promise的executor函数中的同步代码console.log("7")直接执行
 *       then 进入微任务队列 记作：then1
 *    5. setTimeout() 进入宏任务队列，记作：setTimeout2
 *    6. 宏任务执行完成[1, 7]已经输出，开始读取微任务队列
 *    7. process1出队，console.log("6")执行，输出6
 *    8. then1出队，console.log("8")执行，输出8
 *    9. 微任务队列清空，第一轮事件循环完成
 * 第二轮事件循环：
 *    1. 开始读取宏任务队列，setTimeout1出队
 *    2. 同步代码console.log("2")立即执行，输出2
 *    3. process.nextTick 进入微任务队列，记作：process2
 *    4. new Promise的executor函数中的同步代码console.log("4")直接执行，输出4
 *       then进入微任务队列 计作：then2
 *    5. 宏任务执行完成[2, 4]已经输出，开始读取微任务队列
 *    6. process2出队，console.log("3")执行，输出3
 *    7. then2出队，console.log("5")执行，输出5
 *    8. 微任务队列清空，第二轮事件循环完成
 * 第三轮事件循环：
 *    1. 开始读取宏任务队列，setTimeout2出队
 *    2. 同步代码console.log("9")立即执行，输出9
 *    3. process.nextTick进入微任务队列，计作：process3
 *    4. new Promise的executor函数中的同步代码console.log("11")立即执行，输出11
 *       then进入微任务队列，计作then3
 *    5. 宏任务执行完成[9, 11]已经输出，开始读取微任务队列
 *    6. process3出队，console.log("10")执行，输出10
 *    7. then3出队，console.log("12")执行，输出12
 *    8. 微任务队列清空，第三轮事件循环完成
 * 宏任务队列清空，代码执行完成
 */

console.log("1"); // 1 同步代码：立即执行 [1]

setTimeout(function() {
  console.log("2"); // 3 同步代码执行执行 输出2
  process.nextTick(function() {
    console.log("3"); // 4 进入微任务队列 [3]
  });
  new Promise(function(resolve) {
    console.log("4"); // 3 同步代码执行执行 输出4
    resolve();
  }).then(function() {
    console.log("5"); // 4 进入微任务队列 [3, 5]
  });
});

process.nextTick(function() {
  console.log("6"); // 2 进入微任务队列 [6]
});

new Promise(function(resolve) {
  console.log("7"); // 1 宏任务：立即执行 [1, 7]
  resolve();
}).then(function() {
  console.log("8"); // 2 进入微任务队列 [6, 8]
});

setTimeout(function() {
  console.log("9"); // 5 宏任务：立即执行 [9]
  process.nextTick(function() {
    console.log("10"); // 6 进入微任务队列 [10]
  });
  new Promise(function(resolve) {
    console.log("11"); // 5 宏任务：立即执行 [9, 11]
    resolve();
  }).then(function() {
    console.log("12"); // 6 进入微任务队列 [10, 12]
  });
});
// 执行顺序：1 7 6 8 2 4 3 5 9 11 10 12
