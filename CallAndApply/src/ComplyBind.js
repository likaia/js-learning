var obj = {
  age: 20
};

function bayMax(name, title) {
  this.msg = "构造消息";
  console.log(name);
  console.log(title);
  console.log(this.age);
}
bayMax.prototype.type = "原型属性";

// var copyBayMax = bayMax.bind(obj, "大白");
// copyBayMax("标题");

/**
 * 实现bind方法
 * bind方法的作用：创建一个函数并返回，该函数的this指向为bind方法的第一个参数，之后的一序列参数将会在传递的实参前传入作为它的参数。
 * 实现思路：
 *  1. 保存当前调用函数的this引用，取出调用函数时需要的参数(除第一个参数外的其他参数)
 *  2. 创建一个空函数，接收当前调用函数上的原型对象
 *  3. 函数内部创建一个函数，获取用户传递的参数和用户调用bind2方法时传递的其他参数进行拼接
 *     判断调用者是否把当前函数当成构造函数来使用，根据不同的情况来确定this执行
 *     最后传入函数所需参数并调用
 *  4. 修改内部函数原型为空函数的实例
 *  5. 返回内部函数引用，形成闭包结构
 * @param context this要指向的参数对象
 * @returns {fbound}
 */
Function.prototype.bind2 = function(context) {
  var self = this;
  // 获取bind2函数从第二个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1);
  // 用一个空函数来接收当前执行函数的原型
  var fNOP = function() {};

  var fbound = function() {
    // 此处的arguments是指bind返回的函数传入的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    // 当作为构造函数时，this 指向实例，self 指向绑定函数，因为下面一句 `fbound.prototype = this.prototype;`，已经修改了 fbound.prototype 为 绑定函数的 prototype，此时结果为 true，当结果为 true 的时候，this 指向实例。
    // 当作为普通函数时，this 指向 window，self 指向绑定函数，此时结果为 false，当结果为 false 的时候，this 指向绑定的 context。
    self.apply(this instanceof self ? this : context, args.concat(bindArgs));
  };
  fNOP.prototype = this.prototype;
  // 修改返回函数的原型为空函数实例的原型
  fbound.prototype = new fNOP();
  // 返回函数引用，形成闭包结构
  return fbound;
};

var copyBayMax = bayMax.bind2(obj, "大白");
copyBayMax("标题");
