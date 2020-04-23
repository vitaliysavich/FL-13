let str = prompt(`Input your string:`);
let index = Math.round(str.length / 2) - 1;
if (!/\w/.test(str)) {
  alert(`Invalid input data`);
} else if (str.length % 2 === 0) {
  alert(`"${str[index] + str[index + 1]}"`);
} else {
  alert(`"${str[index]}"`);
}
