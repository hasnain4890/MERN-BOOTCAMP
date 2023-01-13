// console.log("promise 1");
// setTimeout(() => {
//   console.log("promise 2");
// }, 4000);

// console.log("promise 3");

let p1 = new Promise((resolve, reject) => {
  console.log("promise is pending 1");
  setTimeout(() => {
    console.log("promise 11");
    resolve(true);
  }, 2000);
});
let p2 = new Promise((resolve, reject) => {
  console.log("promise is pending 2");
  setTimeout(() => {
    console.log("promise 22");
    reject(new Error());
  }, 2000);
});
p1.then((value) => {
  console.log("value");
});
p2.catch((error) => {
  console.log("some error is occured");
});

console.log(p1, p2);
