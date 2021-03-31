// 理解Object.defineProperty

// var obj = {};
// Object.defineProperty(obj, "num", {
//   value: 1,
//   writable: true,
//   enumerable: true,
//   configurable: true
// });
// //  对象 obj 拥有属性 num，值为 1
// obj.num = 12;
// console.log(obj.num);

// var value = 1;
// let obj = {};
// Object.defineProperty(obj, "num", {
//   get: function(value) {
//     return value;
//   },
//   set: function(newValue) {
//     value = newValue;
//   },
//   enumerable: true, // 出现在枚举属性中
//   configurable: true // 描述符可以被改变，也可以被删除
// });
// obj.num = "122";
// delete obj.num;
// console.log(obj.num);

// var obj = {},
//   value = null;
// Object.defineProperty(obj, "num", {
//   get: function() {
//     console.log("执行了 get 操作");
//     return value;
//   },
//   set: function(newValue) {
//     console.log("执行了 set 操作");
//     value = newValue;
//   }
// });
//
// obj.num = 1; // 执行了 set 操作
//
// console.log(obj.num); // 执行了 get 操作 // 1

// function Archiver() {
//   var value = null;
//   // archive n. 档案
//   var archive = [];
//
//   Object.defineProperty(this, "num", {
//     get: function() {
//       console.log("执行了 get 操作");
//       return value;
//     },
//     set: function(value) {
//       console.log("执行了 set 操作");
//       value = value;
//       archive.push({ val: value });
//     }
//   });
//
//   this.getArchive = function() {
//     return archive;
//   };
// }
//
// var arc = new Archiver();
// arc.num; // 执行了 get 操作
// arc.num = 11; // 执行了 set 操作
// arc.num = 13; // 执行了 set 操作
// console.log(arc.getArchive()); // [{ val: 11 }, { val: 13 }]

(function() {
  /**
   * 监听对象属性值改变触发回调函数
   * @param obj 需要进行监听的对象
   * @param key 需要进行监听的对象属性
   * @param callback 对象属性值改变后，需要触发的函数
   * @returns {*}
   */
  function watch(obj, key, callback) {
    var value = obj[key];
    Object.defineProperty(obj, key, {
      get() {
        return value;
      },
      set(v) {
        value = v;
        callback(value);
      }
    });
    if (value) {
      obj[name] = value;
    }
  }
  this.watch = watch;
})();
const obj = {};
watch(obj, "name", function(value) {
  console.log("obj的name属性值改变，新值为", value);
});
obj.name = "神奇的程序员";
obj.name = "大白";
