function reverseWords(str) {
  return str
    .split(" ")
    .reduce((acc, el) => {
      if (el.length === 1) {
        acc.unshift(el);
        return acc;
      } else {
        acc.push(el.split("").reverse().join(""));
        return acc;
      }
    }, [])
    .join(" ");
}

// reverseWords("The quick brown fox jumps over the lazy dog.");
console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
// reverseWords("apple");
// reverseWords("a b c d");
console.log(reverseWords("a b c d"));
// reverseWords("double  spaced  words");
/**.reverse() 
 * 
 * 
 * if (el.length > 1) {
      reverseWords(el);
    }

    reduce(

    str.split(" ").reverse();
*/
