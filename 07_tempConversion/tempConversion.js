const convertToCelsius = function(num) {
  if (typeof num != "number") return "ERROR";
  num = ((num - 32) * 5) / 9;
  return Math.round(num * 10) / 10;
};

const convertToFahrenheit = function(num) {
  if (typeof num != "number") return "ERROR";
  num = (num * 9) / 5 + 32;
  return Math.round(num * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
