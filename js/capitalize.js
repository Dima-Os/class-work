"use strict";
function capitalize(s) {
  let result = [];
  result.push(
    s
      .split("")
      .map((el, index) => {
        if (index % 2 === 0) {
          return el.toUpperCase();
        }
        return el;
      })
      .join("")
  );
  result.push(
    s
      .split("")
      .map((el, index) => {
        if (index % 2 !== 0) {
          return el.toUpperCase();
        }
        return el;
      })
      .join("")
  );
  return result;
}

capitalize("abcdef"); //, ["AbCdEf", "aBcDeF"]);
console.log(capitalize("abcdef")); //, ["AbCdEf", "aBcDeF"]);
// capitalize("codewars"); //, ["CoDeWaRs", "cOdEwArS"]);
// capitalize("abracadabra"); //, [  "AbRaCaDaBrA",  "aBrAcAdAbRa",

// capitalize("codewarriors"); //, "CoDeWaRrIoRs",  "cOdEwArRiOrS",
