const obj = {
  age: "20"
};

function bayMax(name) {
  console.log(this.age);
  console.log(name);
  return {
    name: name,
    age: this.age
  };
}
// const result = bayMax.call(obj, "大白");
// console.log(result);

/**
 * 实现call方法
 * call方法的作用：改变当前执行函数的this指向并调用
 * 实现思路：
 *  1. 将当前执行函数作为属性添加到context参数对象中
 *  2. 获取除context外的其他参数，传入当前执行函数并调用，保存函数返回值
 *  3. 删除第1步添加的属性
 *  4. 返回第2步保存的函数返回值
 * @param context this将要指向的对象
 */
Function.prototype.call2 = function(context) {
  // context可能为null，如果为null则取global
  context = context || global;
  // 将当前执行函数作为属性添加至context参数对象中
  context.fn = this;
  var args = [];
  // 获取除this外的其他参数
  for (var i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }
  // 提取参数传入当前执行函数，并执行该函数
  var result = eval("context.fn(" + args + ")");
  // 删除context参数对象中的执行函数属性
  delete context.fn;
  return result;
};

const result = bayMax.call2(obj, "大白");
console.log(result);
