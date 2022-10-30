//normal function
//it takes more place in memory , so its slows
function fn(str) {
  return str + "hasnain";
  //console.log("my functions");
}
result = fn("ahmad" + " ");
console.log(result);

// arrow function
const myfunc = (str) => {
  return str + "waqas khan";
};
result2 = myfunc("gul" + " ");
console.log(result2);

let sum = (a, b) => {
  let result = a + b;
  return result;
};
let result1 = sum(5, 7);
console.log(result1);

// nested functions
function Person() {
  (this.name = "hasnain"),
    (this.age = 25),
    (this.sayName = function () {
      // this is accessible
      console.log(this.age);

      function innerFunc() {
        // this refers to the global object
        console.log(this.age);
        //console.log(this);
      }

      innerFunc();
    });
}

let x = new Person();
x.sayName();
