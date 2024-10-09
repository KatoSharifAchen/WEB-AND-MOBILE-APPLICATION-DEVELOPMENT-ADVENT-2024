//number 5 functions with multiple  Parameters(calculate revenue for a farmer)
function calculateRevenue(pricePerBunch, numberOfBunches) {
    return pricePerBunch * numberOfBunches;
    }
    let pricePerBunch = 15000; // UGX
    let bunchesSold = 30; // Number of bunches sold
    let revenue = calculateRevenue(pricePerBunch, bunchesSold);
    console.log(`Total revenue for selling matooke is UGX ${revenue}`);
    //task calculate profit
    function calculateProfit(sellingPrice, costPrice, unitsSold) {
        // Validate input
        if (sellingPrice <= 0 || costPrice <= 0 || unitsSold <= 0) {
          throw new Error("All input values must be positive numbers.");
        }
      
        // Calculate profit per unit
        const profitPerUnit = sellingPrice - costPrice;
      
        // Calculate total profit
        const totalProfit = profitPerUnit * unitsSold;
      
        return totalProfit;
      }