const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a, b) {
  if (Array.isArray(a)) {
    let sum = 0;
    for (x of a) sum += x;
    return sum;
  }

  return a + b;
};

const multiply = function (a, b) {
  if (Array.isArray(a)) {
    let res = 1;
    for (x of a) res *= x;
    return res;
  }

  a * b;
};

const power = function (a, b) {
  let res = 1;
  for (let i = 0; i < b; i++) {
    res *= a;
  }
  return res;
};

const factorial = function (a) {
  if (a <= 1) return 1;
  if (a == 2) return 2;
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
