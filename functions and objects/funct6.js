 //number 6 functions with default parameters(calculate fees with default boarding fee)
 function calculateFees(tuitionFee, boardingFee = 500000) {
    return tuitionFee + boardingFee;
    }
    let totalFeesWithBoarding = calculateFees(1500000);
    console.log(`Total school fees (with boarding) are UGX
    ${totalFeesWithBoarding}`);
    let totalFeesWithoutBoarding = calculateFees(1500000, 0);
    console.log(`Total school fees (without boarding) are UGX
    ${totalFeesWithoutBoarding}`);
    //task calculate internet cost
    function calculateInternetCost(numberOfBundles = 50000) {
        // Calculate the total cost by multiplying the number of bundles by the cost per bundles
        const totalCost = numberOfBundles;
      
        // Return the total cost
        return totalCost;
      }
      
      // Example usage:
      const numBundles = 3; // You can change this to any desired number of bundles
      const totalCost = calculateInternetCost(numBundles);
      console.log("Total internet cost:", totalCost, "UGX");