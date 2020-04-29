let positiveSum = (array) => {
  return array.reduce((sum, curr) => {
    return curr > 0 ? (sum += curr) : (sum += 0);
  }, 0);
};
console.log(positiveSum([2, -4, 6, 8]));
console.log(positiveSum([-10, -5, 5, 7]));
