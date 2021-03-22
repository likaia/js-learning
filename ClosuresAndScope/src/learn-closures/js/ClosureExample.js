var selfAdd = function() {
  var a = 1;
  return function() {
    a++;
    console.log(a);
  };
};

const addFn = selfAdd();
addFn();
addFn();
addFn();
addFn();
