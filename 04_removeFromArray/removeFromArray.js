const removeFromArray = function(myArr, ...exclude) {
  for (let x of exclude)
    for (let i = 0; i < myArr.length; i++)
      if (myArr[i] === x) {
        myArr.splice(i, 1);
        i--;
      }
  return myArr;
};

// Do not edit below this line
module.exports = removeFromArray;
