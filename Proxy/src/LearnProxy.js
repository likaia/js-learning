// 理解proxy
// const obj = {};
// var proxy = new Proxy(obj, {
//   get(target, p, receiver) {
//     console.log("get操作", receiver);
//     return target[p];
//   },
//   set(target, p, value) {
//     console.log("set操作");
//     target[p] = value;
//   }
// });
// proxy.name = "大白";
// console.log(proxy.name);

// 使用has拦截某些属性，不被in操作符发现
// const obj = {};
//
// var proxy = new Proxy(obj, {
//   has(target, key) {
//     // 属性名中如果包含_则返回false
//     if (key[0] === "_") {
//       return false;
//     }
//     return key in target;
//   }
// });
// proxy._name = "大白";
// proxy.name = "神奇的程序员";
// console.log("_name" in proxy);
// console.log("name" in proxy);

/**
 * 监听对象属性值改变触发回调函数
 * Proxy与Object.defineProperty对比，其优势如下：
 *  1. 支持监听整个对象属性的变化，而并非一个属性，修改属性值时不需要额外的变量来辅助
 *  2. 支持监听数组的变化
 *  3. 不会污染原对象，而是返回一个新的代理对象
 *  4. 支持13种拦截操作，比如 has方法，可以拦截 key in proxy 的操作，返回一个布尔值。
 *     apply 方法拦截函数的调用、call 和 apply 操作。
 * @param obj 需要监听的对象
 * @param callback 触发监听后要执行的回调函数
 * @returns {Proxy}
 */
function watch(obj, callback) {
  var proxy = new Proxy(obj, {
    get(target, key) {
      return target[key];
    },
    set(target, key, value) {
      target[key] = value;
      callback(value, key);
    }
  });
  return proxy;
}
const obj = {};
var proxyObj = watch(obj, function(value, key) {
  console.log("obj属性值: " + key + "改变，新值为:", value);
});
proxyObj.name = "神奇的程序员";
