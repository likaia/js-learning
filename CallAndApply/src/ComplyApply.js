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
// const result = bayMax.apply(obj, ["大白"]);
// console.log(result);

/**
 * 实现apply方法
 * apply方法的作用：改变当前执行函数的this指向并调用
 * 实现思路：
 *  1. 将当前执行函数作为属性添加进context参数对象中
 *  2. 提取arr数组中的参数，传入当前执行函数并调用，保存函数返回值
 *  3. 删除第1步添加的属性
 *  4. 返回第2步保存的函数返回值
 * @param context this将要指向的对象
 * @param arr 当前执行函数需要传的参数，值为数组类型
 */
Function.prototype.apply2 = function(context, arr) {
  // context可能为null，如果为null则取global
  context = context || global;
  context.fn = this;
  var result;
  if (!arr) {
    // 函数无参数则直接执行
    result = context.fn();
  } else {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push("arr[" + i + "]");
    }
    // 提取参数传入当前执行函数并执行
    result = eval("context.fn(" + args + ")");
  }

  delete context.fn;
  return result;
};
const result = bayMax.apply2(obj, ["大白"]);
console.log(result);
