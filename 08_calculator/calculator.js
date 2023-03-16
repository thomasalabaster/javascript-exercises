const add = (a,b) => a + b;

const subtract = (a, b) => a - b;

const sum = function() {
  let newSum = 0;
  if (arguments.length === 0)
  {
    return 0;
  }
  for (let i = 0; i < arguments[0].length; i++)
  {
    newSum += parseInt(arguments[0][i]);
  }
  return newSum;
};

const multiply = function() {
  let newSum = 0;
  if (arguments.length === 0)
  {
    return 0;
  }
  newSum = arguments[0][0];
  for (let i = 1; i < arguments[0].length; i++)
  { 
    newSum *= arguments[0][i];
  }
  return newSum;
  
};

const power = function(num, power) {
  let finalNum = num;
  for (let i = 1; i < power; i++)
  {
    finalNum *= num;
  }
  return finalNum;
};

const factorial = function(num) {
  let newFactorial = 1;
  if (num === 0)
  {
    return 1;
  }
  for (let i = 1; i <= num; i++)
  {
    newFactorial *= i;
  }
  return newFactorial;
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
