function findUniq(arr) {
  return arr.reduce((acc, element) => {
    return acc === element ? acc : element;
  });
}

console.log(findUniq([0, 1, 0]));
console.log(findUniq([2, 1, 1, 1, 1, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));
console.log(findUniq([0, 1, 1, 1, 1, 1, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
/** */
