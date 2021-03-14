/*
 * 函数柯里化与组合函数
 * */

// 普通函数思想
function add(x, y) {
  return x + y;
}

// 柯里化思想
function curring(x) {
  return function(y) {
    return x + y;
  };
}

// 调用
console.log(add(1, 2));
console.log(curring(1)(2));

/**
 * 未知参数求和
 */
function unknownSum() {
  // 存储每次函数调用时的参数
  let arr = [];
  const add = (...params) => {
    // 拼接新参数
    arr = arr.concat(params);
    return add;
  };

  // 对参数进行求和
  add.toString = function() {
    let result = 0;
    // 对arr中的元素进行求和
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result + "";
  };

  return add;
}
const result1 = unknownSum()(1, 6, 7, 8)(2)(3)(4);
console.log(result1.toString());

/**
 * 已知参数求和
 * 规则：传入要计算的次数，如果已计算次数等于要计算次数时就返回结果
 */
function aKnownSum(n) {
  let arr = [];
  let index = 0;

  const add = (...params) => {
    index++;
    arr = arr.concat(params);
    // 当add函数执行次数等于参数时则返回其结果
    if (index === n) {
      return arr.reduce((total, item) => total + item);
    }

    return add;
  };

  return add;
}

const result2 = aKnownSum(4)(1, 5, 6)(2)(3)(4);
console.log(result2);

/**
 * 函数组合
 * @param funcs 需要组合的函数
 * @returns {(function(*): *)|*}
 */
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => {
    return x => {
      return a(b(x));
    };
  });
}

const one = x => x + 1;
const two = x => x + 2;
const three = x => x + 3;
const result3 = compose(one, two, three, one);
console.log(result3(1));
