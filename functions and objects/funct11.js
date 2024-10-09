//number 11 applying functions to real world problems
function calculateIncome(kilometers) {
    let incomePerKm = 4000;
    return kilometers * incomePerKm;
}
let kilometersTraveled = 50; // Kilometers traveled in a day
let dailyIncome = calculateIncome(kilometersTraveled);
console.log(`The total income for the day is UGX ${dailyIncome}`);

//task extend the calculate income to include bonuses for trips during rush hour
function calculateIncome(baseFare, distance, rushHourTimes) {
// Calculate the base fare based on distance (assuming a simple linear relationship)
const baseFareAmount = baseFare * distance;
// Determine if the trip was during rush hour
const isRushHour = rushHourTimes.some((timeRange) => {
    const [startTime, endTime] = timeRange;
    return startTime <= new Date() && new Date() <= endTime;
});
// Calculate the bonus amount (adjust as needed)
const rushHourBonus = isRushHour ? baseFareAmount * 0.2 : 0; 
// 20% bonus for rush hour      
// Calculate the total income
const totalIncome = baseFareAmount + rushHourBonus;
return totalIncome;
}