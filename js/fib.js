// const summTo = (n) => {
//   return n === 1 ? n : (n += summTo(n - 1));
// };
// const factorialTo = (n) => {
//   return n ? (n *= factorialTo(n - 1)) : 1;
// };

const fibTo = (n) => {
  return n <= 1 ? n : (n = fibTo(n - 1) + fibTo(n - 2));
};

// const getFibArrayTo = (n) => {
//   let firstNum = 1;
//   let nextNum = 1;
//   let fibArrayTo = [firstNum, nextNum];
//   for (let i = 3; i <= n; i++) {
//     let summNum = firstNum + nextNum;
//     firstNum = nextNum;
//     nextNum = summNum;
//     fibArrayTo.push(nextNum);
//   }
//   return nextNum, fibArrayTo;
// };
// console.log(summTo(100));
// console.log(factorialTo(6));
console.log(fibTo(7));
// console.log(getFibArrayTo(1000));
