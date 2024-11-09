// a function to reverse a given string.

function reverseString(str) {
 return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"