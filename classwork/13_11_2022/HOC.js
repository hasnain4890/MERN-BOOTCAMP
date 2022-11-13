let radiusarray = [1, 2, 3, 4];
const area = (params) => {
  return params * params * Math.PI;
};
const circumferance = (params) => 2 * params * Math.PI;

const diameter = (params) => {
  return 2 * params;
};

Array.prototype.calculate = (formula, radiusarray) => {
  let output = [];
  for (let i = 0; i < radiusarray.length; i++) {
    output.push(formula(radiusarray[i]));
  }
  return output;
};
console.log(radiusarray.calculate(diameter, radiusarray));
console.log(radiusarray.calculate(circumferance, radiusarray));
console.log(radiusarray.calculate(area, radiusarray));

// console.log(calculate(area, radiusarray));
// console.log(calculate(circumferance, radiusarray));
// console.log(calculate(diameter, radiusarray));
