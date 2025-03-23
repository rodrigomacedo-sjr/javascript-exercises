const reverseString = function(thing) {
  thing = String(thing);
  arr = thing.split("");
  l = arr.length;
  for (let i = 0; i < l / 2; i++) {
    temp = arr[i];
    arr[i] = arr[l - 1 - i];
    arr[l - 1 - i] = temp;
  }
  return arr.join('');
};

// Do not edit below this line
module.exports = reverseString;
