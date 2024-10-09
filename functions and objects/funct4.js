//number 4 anonymous and arrow functions
letgreet = function(name) {
console.log(`Hello ${name}, how is Uganda treating you?`);
};
greet("Sharif");

//Arrow Function Example:
let greet = (name) => {
  console.log(`Hello ${name}, welcome to the JavaScript world!`);
};
 greet("Sharif");


//task arrow function calculate area
const calculateArea = (length, width) => {

// Ensure length and width are in meters for Kampala
if (length <= 0 || width <= 0) {
  throw new Error("Length and width must be positive numbers.");
}
      
// Calculate the area in square meters
const area = length * width;
return area;
};