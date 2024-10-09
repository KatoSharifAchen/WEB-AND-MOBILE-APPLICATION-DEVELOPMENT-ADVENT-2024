//number 8 functional scope(local and global scope)
let globalVar = "I'm a global variable";
function testScope() {
let localVar = "I'm a local variable";
console.log(globalVar); // Accessible inside the function
console.log(localVar); // Accessible inside the function
}
testScope();
console.log(globalVar); // Accessible outside the function
// console.log(localVar); // Error: localVar is not defined

//task function demonstrating the difference between local and globak variables
let nationalPopulation = 45.78; // Global variable representing Uganda's national population

function calculatePopulationDensity(area) {
  let localPopulation = 3.45; // Local variable representing the population of a specific region

  // Calculate population density using both global and local variables
  const populationDensity = (nationalPopulation + localPopulation) / area;

  return populationDensity;
}