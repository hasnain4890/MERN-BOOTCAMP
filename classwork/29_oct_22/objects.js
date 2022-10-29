//var is global base means function scope
//let is block scope you cant access it outside for loop
//const cant be rewrite and reassigned
//const is usable when array , object and API coming from backend.

// function printNumbers() {
//   for (let i = 1; i < 10; i++) {
//     console.log(i, "hasnain");
//   }
//   console.log(i, "ahmad");
// }

// printNumbers();

const obj = {
  first_name: "hasnain",
  last_name: "ahmad",
  age: "23",
  gender: "male",
};
//when all the properties are in front of u.
console.log("first object");
console.log(obj.first_name);
console.log(obj.last_name);
console.log(obj.age);

//console.log(obj["age"]); when we take input from user and we dont know what is coming(dont know about key, use for button , onclicks)
console.log(obj["age"]);
console.log(obj["gender"]);

// nested objects
const obj1 = {
  first_name: "hasnain",
  last_name: "ahmad",
  age: "23",
  gender: "male",

  address: {
    city: "peshawar",
    country: "pakistan",
    town: "zarobi",
  },
};

//when all the properties are in front of u.
console.log("second object");
console.log(obj1.address.city);
console.log(obj1.address.town);
console.log(obj1["address"]["country"]);

const employe = {
  employe_id: "hasnain",
  employee_name: "ahmad",
  employee_company: "23",
  company_address: {
    city: "peshawar",
    country: "pakistan",
  },
  employee_address: {
    city: "peshawar1",
    country: "pakistan",
  },
};
console.log("third object");
console.log(employe.employee_address.city);
console.log(employe["company_address"]["country"]);
