// Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

// using test before declaring

//console.log(test); // undefined
//var test = "hello";
console.log(add());
console.log(a);
var a = 23; // it will throw error with "LET"
//console.log("javascript", a);

function add() {
  return a * a;
}

// In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.
