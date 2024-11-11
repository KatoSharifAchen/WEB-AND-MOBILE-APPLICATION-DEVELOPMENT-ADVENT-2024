 //a function to find the longest word in a given string.

function findLongestWord(str) {
  return str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // "jumps"