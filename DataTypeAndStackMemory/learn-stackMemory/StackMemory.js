// 深拷贝：方法1
// const data = { name: "大白" };
// const obj = JSON.parse(JSON.stringify(data));
// obj.age = 20;
// console.log("data = ", data);
// console.log("obj = ", obj);

// 深拷贝：方法2
const data = [{ name: "大白" }];
let obj = data.map(item => item);
obj.push({ name: "神奇的程序员" });
console.log("data = ", data);
console.log("obj = ", obj);
