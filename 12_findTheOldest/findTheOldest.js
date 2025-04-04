const findTheOldest = function(people) {
  return people.sort((a, b) => {
    if (a["yearOfDeath"] == undefined) {
      a["yearOfDeath"] = new Date().getFullYear();
    }
    if (b["yearOfDeath"] == undefined) {
      b["yearOfDeath"] = new Date().getFullYear();
    }

    let age1 = a.yearOfDeath - a.yearOfBirth;
    let age2 = b.yearOfDeath - b.yearOfBirth;

    if (age1 == age2) return 0;
    if (age1 > age2) return -1;
    if (age1 < age2) return 1;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
