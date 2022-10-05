function Person(name, age) {
  this.name = name;
  this.age = age;
  this.height = "175cm";
  this.bodyWeight = "65kg";
  // return "基本类型的返回值";
  return {
    bodyWeight: this.bodyWeight
  };
}
// 每日运动量
Person.prototype.dailyExercise = "300 kcal";
Person.prototype.printBodyWeight = function() {
  console.log(this.name + "体重为: " + this.bodyWeight);
};

// const person = new Person("神奇的程序员", "22");
// // 实例化后，可以访问到：
// //  1.构造函数里的属性
// //  2.函数原型上的属性
// console.log(person.age);
// console.log(person.bodyWeight);
// console.log(person.dailyExercise);
// person.printBodyWeight();

// 模拟new的实现
function instantiateFactory() {
  const obj = {};
  // 取出第一个参数: 函数的构造函数
  const Constructor = [].shift.call(arguments);
  // 将新对象的原型指向构造函数
  obj.__proto__ = Constructor.prototype;
  // 改变构造函数的this指向至新创建的对象
  const result = Constructor.apply(obj, arguments);
  // 如果构造函数有返回值且它的值为对象或者函数则将其返回
  if (result && (typeof result == "object" || typeof result == "function")) {
    return result;
  }
  // 否则返回此对象
  return obj;
}

const factory = instantiateFactory(Person, "神奇的程序员", "22");
console.log(factory.age);
console.log(factory.bodyWeight);
console.log(factory.dailyExercise);
factory.printBodyWeight();
