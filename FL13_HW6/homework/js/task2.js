let str = prompt(`Input your string:`);
if (str && /\w/.test(str)) {
  let index = Math.round(str.length / 2) - 1;
  if (str.length % 2 === 0) {
    alert(`"${str[index] + str[index + 1]}"`);
  } else {
    alert(`"${str[index]}"`);
  }
} else {
  alert(`Invalid input data`);
}
