hoisting1();
console.log(variable);
console.log(hoisting2);
console.log(hoisting3);
var variable = 2;

function hoisting1 () {
  console.log('create at the memory allocation phase');
}

var hoisting2 = function () {
  console.log('get the name 2');
};

var hoisting3 = () => {
  console.log('get the name 3');
}
;
