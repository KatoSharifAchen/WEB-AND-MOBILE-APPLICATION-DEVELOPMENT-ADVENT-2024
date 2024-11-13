// Function to check if a family receives enough food based on their size
function checkFoodDistribution(familySize, foodReceived) {
    const foodPerPerson = 2;
    const requiredFood = familySize * foodPerPerson * 7;

    if (foodReceived >= requiredFood) {
        return "Enough food.";
    } else {
        return "Not enough food.";
    }
}

// Function to distribute food to multiple families over a week
function distributeFood(families) {
    for (let i = 0; i < families.length; i++) {
        const family = families[i];
        const result = checkFoodDistribution(family.size, family.foodReceived);
        console.log(`Family ${i + 1}: ${result}`);
    }
}

// Example families data
const families = [
    {  size: 4, foodReceived: 20 },
    { size: 3, foodReceived: 10 },
    { size: 5, foodReceived: 80 },
    { size: 2, foodReceived: 40 }
];

// Distribute food to families
distributeFood(families);
