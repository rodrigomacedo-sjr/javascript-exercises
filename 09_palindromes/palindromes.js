const palindromes = function(words) {
  let arr = words.split("");
  let len = words.length;
  for (let i = 0; i < len; i++) {
    if (!isLetter(arr[i])) {
      arr.splice(i, 1);
      len--;
      i--;
    }
  }
  words = arr.join("").toUpperCase();
  let sdrow = arr.reverse().join("").toUpperCase();
  return words == sdrow;
};

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z0-9]/i);
}
// Do not edit below this line
module.exports = palindromes;
