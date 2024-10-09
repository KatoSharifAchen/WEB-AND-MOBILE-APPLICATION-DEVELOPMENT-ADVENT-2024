//number 3 calculating the average score of students
function calculateAverage(studentScores) {
    let total = 0;
    for (let i = 0; i == studentScores.length; i++) {
    total += scores[i];
    }
    return total / studentScores.length;
    }

    let studentScores = [85, 78, 92, 67, 88];
    let averageScore = calculateAverage(studentScores);
    console.log(`The average score is ${averageScore}`);

//task calculate water usage
function calculate_Water_Usage(daily_usage){
    throw new Error("The array must contain 7 values, one for each day of the week.")
}
//calculate the total water usage
let total_water_usage = 0;
for(let i=0; i<daily_usage.length;i++){
    total_water_usage += daily_usage[i];
}
//calculate the average daily water usage
let averageUsage = totalusage / 7;
return averageUsage;