//numer 2 calculate tax fare
function calculateTaxiFare(distance, farePerKm) {
    return distance * farePerKm;
    }
    let distanceToWandegeya = 10; // Distance in kilometers
    let farePerKm = 10000; // UGX
    let totalFare = calculateTaxiFare(distanceToWandegeya, farePerKm);
    console.log(`Total taxi fare to Wandegeya is UGX ${totalFare}`);

    //task calculate food expense
    function calculateFoodExpense(mealCost, tipPercentage, taxPercentage) {
        let tipAmount = mealCost * (tipPercentage / 100);
        let taxAmount = mealCost * (taxPercentage / 100);
        let totalExpense = mealCost + tipAmount + taxAmount;
        return totalExpense;
    }

    let meal_Cost = 1000; // UGX
    let tip_Percentage = 10;
    let tax_Percentage = 5;
    let total_Food_Expense = calculateFoodExpense(meal_Cost, tip_Percentage, tax_Percentage);
    console.log(`Total food expense is UGX ${total_Food_Expense}`);
     {
        let tip_Amount = meal_Cost * (tip_Percentage / 100);
        let tax_Amount = meal_Cost * (tax_Percentage / 100);
        let total_Food_Expense = meal_Cost + tip_Amount + tax_Amount;
        return total_Food_Expense;
    }
   