function getValue() {
  console.log("凡科建站");
}
function Person() {
  this.getValue = function() {
    console.log("凡科网");
  };
}
Person.prototype.getValue = function() {
  console.log(88);
};
getValue();
function getValue() {
  console.log("凡科营销");
}
Person.getValue = function() {
  console.log("凡科公众号");
};
const person = new Person();
const person1 = new person.getValue();
const person2 = new new person()();
person.getValue();
person1.getValue();
person2.getValue();
