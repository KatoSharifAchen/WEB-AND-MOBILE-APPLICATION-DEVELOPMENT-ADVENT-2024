 //part 5 nested objects for a Ugandan city
 let kampalaCity = {
    name: "Kampala",
    population: 1500000,
    districts: {
    central: "Kampala Central",
    east: "Nakawa",
    north: "Kawempe",
    south: "Makindye",
    west: "Rubaga"
    }
    };
    console.log(`District in the north of Kampala:
    ${kampalaCity.districts.north}`);



//task a university object that contains nested objects for departments
const university = {
    name: "Makerere University",
    location: "Kampala, Uganda",
    departments: {
      computerScience: {
        name: "Department of Computer Science",
        headOfDepartment: "Prof Mukasa Mark"
      },
      engineering: {
        name: "Department of Engineering",
        headOfDepartment: "Prof. Dr. John Samuel"
      }
    }
  };
    
  console.log("Head of the Department of Computer Science:", university.departments.computerScience.headOfDepartment);