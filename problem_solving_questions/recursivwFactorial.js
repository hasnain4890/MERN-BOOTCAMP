// function Factorial(counter) {
//   console.log(counter);
//   if (counter == 0) {
//     return 1;
//   }
//   return counter * Factorial(counter - 1);
// }

// count = 5;
// res = Factorial(count);
// console.log(res);

const factorialOf = (integer) => {
  let factorial = 1;

  for (let i = 1; i <= integer; i++) {
    factorial *= i;
  }

  return factorial;
};
console.log(factorialOf(2)); // 2
console.log(factorialOf(5)); // 120
console.log(factorialOf(4));
