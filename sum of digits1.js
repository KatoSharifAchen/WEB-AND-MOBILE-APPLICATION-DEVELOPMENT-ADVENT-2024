// a function that calculates the sum of the digits of a number.

function sumOfDigits(num) {
  return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sumOfDigits(1234)); // 10