/**
 * ES6的class继承
 */
class Super {
  constructor(name) {
    this.name = name;
    this.list = ["a", "b", "c"];
  }

  getName() {
    return this.name;
  }
}
// 向Super添加静态方法
Super.staticFn = function() {
  return "Super的静态方法";
};

class Sub extends Super {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  getAge() {
    return this.age;
  }
}

console.log(Sub.staticFn());
const sub1 = new Sub("神奇的程序员", "20");
sub1.list.push("d");
console.log("sub1", sub1.list);
console.log("sub1", sub1.getName());
console.log("sub1", sub1.getAge());
const sub2 = new Sub("大白", "20");
console.log("sub2", sub2.list);
console.log("sub2", sub2.getName());
console.log("sub2", sub2.getAge());
