const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(array) {
  let sum = 1;
  array.forEach(number =>  {
    sum *= number;
  });
  return sum;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(number) {
	let start = 1;
  for(i = 1; i <= number; i++) {
    start *= i;
  }
  return start;
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
