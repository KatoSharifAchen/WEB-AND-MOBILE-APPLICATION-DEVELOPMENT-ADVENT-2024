//number 7 recursive functions(calculate factorial)
function factorial(n) {
    if (n === 1) {
    return 1;
    } else {
    return n * factorial(n - 1);
    }
    }
    let result = factorial(5);
    console.log(`The factorial of 5 is ${result}`);
    //task countdown
    function countdown(num) {
        if (num >= 0) {
          console.log(num);
          countdown(num - 1);
        }
}