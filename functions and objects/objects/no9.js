//part 9 object destructuring
let ugandanFarmer = {
    name: "Kato",
    farmLocation: "Soroti",
    crop: "Coffee"
};
let {name, farmLocation, crop} = ugandanFarmer;
console.log(`${name} farms ${crop} in ${farmLocation}.`);
    
//task Using the school object, destructure the name, location, and studentsCount into variables and log them 
const school = {
    name: "St Augustins collage , wakiso",
    location: "Wakiso, Uganda",
    studentsCount: 10000,
    schoolType: "Secondary"
};