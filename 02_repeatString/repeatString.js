const repeatString = function (myStr, quant) {
  if (quant < 0) return "ERROR"
  ret = "";
  for (let i = 0; i < quant; i++) {
    ret += String(myStr);
  }
  return ret;
};

// Do not edit below this line
module.exports = repeatString;
