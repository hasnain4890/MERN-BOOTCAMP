//filter is used to filters all the elements and returns the element that matches
// find function will return a single value

const employe = [
  {
    employe_id: 1,
    employee_name: "ahmad",
    employee_company: "apple",
    employee_salary: "234353",
    islam: true,
    company_address: {
      city: "peshawar",
      country: "pakistan",
    },
    employee_address: {
      city: "peshawar",
      country: "pakistan",
    },
  },
  {
    employe_id: 2,
    employee_name: "hasnain",
    employee_company: "nokia",
    employee_salary: 32321,
    islam: false,
    company_address: {
      city: "islamabad",
      country: "pakistan",
    },
    employee_address: {
      city: "peshawar1",
      country: "pakistan",
    },
  },
  {
    employe_id: 3,
    employee_name: "nabeel",
    employee_company: "nokia",
    employee_salary: 32321,
    islam: false,
    islam: false,
    company_address: {
      city: "islamabad",
      country: "pakistan",
    },
    employee_address: {
      city: "peshawar1",
      country: "pakistan",
    },
  },
  {
    employe_id: 4,
    employee_name: "waqas",
    employee_company: "microsoft",
    employee_salary: 432432,
    islam: false,
    company_address: {
      city: "nowshehra",
      country: "pakistan",
    },
    employee_address: {
      city: "peshawar1",
      country: "pakistan",
    },
  },
  {
    employe_id: 5,
    employee_name: "waqas",
    employee_company: "microsoft",
    employee_salary: 432432,
    islam: false,
    company_address: {
      city: "nowshehra",
      country: "pakistan",
    },
    employee_address: {
      city: "peshawar1",
      country: "pakistan",
    },
  },
  {
    employe_id: 6,
    employee_name: "ahmad",
    employee_company: "syntecx",
    employee_salary: 999,
    islam: false,
    company_address: {
      city: "peshawar",
      country: "pakistan",
    },
    employee_address: {
      city: "peshawar1",
      country: "pakistan",
    },
  },
  {
    employe_id: 7,
    employee_name: "nawab",
    employee_company: "bitsol",
    employee_salary: 4435,
    islam: false,
    company_address: {
      city: "peshawar",
      country: "pakistan",
    },
    employee_address: {
      city: "lahore",
      country: "pakistan",
    },
  },
  {
    employe_id: 8,
    employee_name: "khan",
    employee_company: "10 pearls",
    employee_salary: 45345,
    islam: true,
    company_address: {
      city: "peshawar",
      country: "pakistan",
    },
    employee_address: {
      city: "peshawar1",
      country: "pakistan",
    },
  },
  {
    employe_id: 9,
    employee_name: "hasaan",
    employee_company: "system limited",
    employee_salary: 434,
    company_address: {
      city: "karachi",
      country: "pakistan",
    },
    employee_address: {
      city: "peshawar1",
      country: "pakistan",
    },
  },
  {
    employe_id: 10,
    employee_name: "faisal",
    employee_company: "twitter",
    employee_salary: 32423,
    islam: true,
    company_address: {
      city: "peshawar",
      country: "pakistan",
    },
    employee_address: {
      city: "peshawar1",
      country: "pakistan",
    },
  },
  {
    employe_id: 11,
    employee_name: "wisal khalid",
    employee_company: "apple",
    employee_salary: 8345,
    islam: true,
    company_address: {
      city: "peshawar",
      country: "pakistan",
    },
    employee_address: {
      city: "peshawar1",
      country: "pakistan",
    },
  },
];
// const array2 = employe.find((element) => element.islam == true);
// const array3 = employe.filter((element) => element.employee_salary > 1000);

// console.log(array2);
// console.log(array3);

// foreach will iterate through the whole array
// let employe1 = {};
// employe.forEach((element) => {
//   if (element.employee_name === "faisal") {
//     return (employe1 = element);
//   }
// });
// console.log(employe1);

// find all values who is modulous 2
// const array = [2, 3, 6, 9, 15, 30, 33, 40, 51];
// const array4 = array.filter((element) => element % 2 === 0);
// console.log(array4);

// MAP FUNCTION (MAP value return karta hai )

// const array = [2, 3, 6, 9, 15, 30, 33, 40, 51];
// array1 = array.map((element) => {
//   return element * 2;
// });

// console.log(array);
// console.log(array1);

for (var i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) console.log("FuzzBuzz");
  else if (i % 7 == 0 && i % 3 == 0) console.log("duzzfuzz");
  else if (i % 3 == 0) console.log("Fuzz");
  else if (i % 5 == 0) console.log("Buzz");
  else if (i % 7 == 0) console.log("duzz");
  else console.log(i);
}
