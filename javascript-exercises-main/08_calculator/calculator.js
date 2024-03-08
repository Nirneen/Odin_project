const add = function(a ,b) {
  return a + b
};

const subtract = function(num1, num2) {
  return num1 - num2
};

const sum = function(nums) {
	return nums.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, currentItem) => total * currentItem, 1)
};

const power = function(a, b) {
	let numPower = 1;
  for(let i=0;i<b;i++){
    numPower *= a;
  }
  return numPower
};

const factorial = function(num) {
	let result = 1;
  if(num === 0) {return result}
  for(let i=1;i<=num;i++){
    result *= i;
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
