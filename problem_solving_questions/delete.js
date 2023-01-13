let data = [12, 23, 45, 66, 78, 65, 66];

let position = 2;

for (let i = position; i <= data.length - 1; i++) {
  data[i] = data[i + 1];
}
data.length = data.length - 1;
console.log(data);

// data.splice(3, 2);
// console.log(data);
