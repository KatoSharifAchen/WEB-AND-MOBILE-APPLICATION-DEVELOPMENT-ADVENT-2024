//part 6 looping through objects(iterating over a farmers properties)
let ugandanFarmer = {
    name: "Sharif",
    farmLocation: "jinja",
    crop: "Coffee",
    numberOfAcres: 5
};
for (let key in ugandanFarmer) {
    console.log(`${key}: ${ugandanFarmer[key]}`);
}


//tasks
const school = {
    name: "St.Augustines collage, Wakiso",
    location: "Kampala, Uganda",
    studentsCount: 10000,
    establishedYear: 1857,
    schoolType: "Secondary",
    calculateSchoolAge: function() {
      const currentYear = new Date().getFullYear()
      return currentYear - this.establishedYear;
    }
};
for (const property in school) {
    console.log(property, ":", school[property]);
}