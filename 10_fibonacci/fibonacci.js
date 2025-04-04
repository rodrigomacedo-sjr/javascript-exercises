const fibonacci = function(a) {
  a = Number(a);
  if (a < 0) return "OOPS";
  else if (a == 0) return 0;
  else if (a <= 2) return 1;
  else return fibonacci(a - 1) + fibonacci(a - 2);
};

// Do not edit below this line
module.exports = fibonacci;
