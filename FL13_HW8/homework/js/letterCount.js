let letterCount = (str, a) => {
  return str
    .toLowerCase()
    .split("")
    .reduce((count, curr) => {
      return curr === a ? (count += 1) : count;
    }, 0);
};

console.log(letterCount("Maggy", "g")); // => 2
console.log(letterCount("Barry", "b")); // => 1
console.log(letterCount("", "z"));
