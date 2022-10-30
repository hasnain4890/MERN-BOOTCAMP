// spread operatordenoted by three dots(...)
// it makes copy of original object/array  and doesnt disturb original array

const array = ["hasnain", "ahmad", "khan"];
console.log(...array, "waqas", "khan");

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

const obj1 = { name: "hasnain", x: 42 };
const obj2 = { name2: "ahmad", y: 13 };
const clonedObj = { ...obj1 };
const mergedObj = { ...obj1, ...obj2 };

console.log(clonedObj);
console.log(mergedObj);

const obj = {
  first_name: "hasnain",
  last_name: "ahmad",
  age: "23",
  gender: "male",
};
obj.father_name = "abduk karim";
obj.marks = 360;
obj.address = { city: "islamabad", country: "pak" };

console.log(obj);
