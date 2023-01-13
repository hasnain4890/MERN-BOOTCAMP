// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(2)); // prints true
// console.log(isPrime(3)); // prints true
// console.log(isPrime(4)); // prints false
// console.log(isPrime(5)); // prints true

const isPrime = function (number) {
  for (i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log("not prime");
    } else {
      console.log("prime number");
    }
  }
};
console.log(isPrime(6)); // prints true
// console.log(isPrime(3)); // prints true
// console.log(isPrime(4)); // prints false
// console.log(isPrime(5)); // prints true
