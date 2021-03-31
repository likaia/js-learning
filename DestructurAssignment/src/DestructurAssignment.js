// 解构赋值
const obj = {
  name: "大白",
  age: 20,
  msgObj: {
    text: "消息内容",
    time: "2021-03-28 23:10"
  }
};

// 解构时为属性起别名
const { name: alias } = obj;
console.log(alias);

// 解构时为不存在的属性或者属性值为undefined赋值默认值
const { title: newTitle = "标题" } = obj;
console.log(newTitle);

// 嵌套对象的解构
const {
  msgObj: { text = "默认消息", time }
} = obj;
console.log(text);
console.log(time);

// 数组的解构赋值
const ages = [20, 22, 35, 40, 30];
const [bayMax, , tom] = ages;
console.log(bayMax, tom);

// 数组解构赋值默认值
const [, , , , , ming = 21] = ages;
console.log(ming);

// 嵌套数组的解构赋值
let colors = ["red", ["green", "yellow"], "blue"];
let [firstColor, [secondColor]] = colors;
console.log(firstColor, secondColor); // red , green

// 获取数组中的剩余元素
const [, ...otherColor] = colors;
console.log(otherColor);
