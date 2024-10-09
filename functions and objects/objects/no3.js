let ugandaFamer={
  name :'Kato',
  farmlocation:'mbarara',
  crop:'coffee',
  numberofacers:'7',
  cropPrice:3000,
  calculateRevenue: function(harvestedbags){
    return harvestedbags*this.cropPrice
  }
};
let revenue = ugandaFamer.calculateRevenue(200);
console.log("Total revenue: ",revenue);
ugandaFamer.cropsharvested=1000;
ugandaFamer.crop="Maize";

console.log("Farmer's name:",ugandaFamer.name);
console.log("Farmer's crop:",ugandaFamer.crop);
console.log("number of acers:",numberofacers);
console.log("Farm location:",ugandaFamer.farmLocation);
console.log(ugandaFamer.cropsharvested);
console.log("Updated Farm Crop:",ugandanFarmer.crop);

//Task
//object school with properties of name, location and studentsCount.
let school={
  name:"Trentson",
  location:"New Jersey",
  studentsCount:2000,
  establishedYear:2014,
  calculateSchoolAge: function(schoolAge){
    return schoolAge- this.establishedYear;
  }
};

let newage=school.calculateSchoolAge(2024);
console.log("The New Age:", newage)

school.schooltype ="Primary";
school.sstudentsCount=3500;

console.log("School's Name:",school.name)

console.log("School's location:",school.location)

console.log("School's Type:",school.schooltype)

console.log("Student's Count:", school.studentsCount)