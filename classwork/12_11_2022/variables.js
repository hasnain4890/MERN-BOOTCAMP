var x = 5;
var y = 6;
var z = x + y;
console.log(z);

var greet = "Hello "; // global variable

function myfunction() {
  var msg = "JavaScript!";
  console.log(greet + msg); //can access global and local variable
}

console.log(myfunction());
