let countPoints = (array) => {
  return array
    .map((str) => {
      return str.split(":");
    })
    .reduce((points, curr) => {
      if (curr[0] > curr[1]) {
        return (points += 3);
      } else if (curr[0] === curr[1]) {
        return (points += 1);
      } else {
        return (points += 0);
      }
    }, 0);
};

console.log(
  countPoints([
    "3:1",
    "1:0",
    "0:0",
    "1:2",
    "4:0",
    "2:3",
    "1:1",
    "0:1",
    "2:1",
    "1:0",
  ])
); // => 17
console.log(
  countPoints([
    "1:1",
    "1:2",
    "2:0",
    "4:2",
    "0:1",
    "2:3",
    "1:1",
    "0:1",
    "1:1",
    "3:0",
  ])
); // => 12*/
