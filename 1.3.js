const arr = [4, [[5], [6, [7], 8], 9, 10]];
const toFlattedArray = (arr) => {
  return arr.flat(Infinity);
};

console.log(toFlattedArray(arr));
