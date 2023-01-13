let data1 = [1, 4, 3, 2, 50, 33];
let data2 = [11, 28, 26, 31];
let data3 = [];

//while llop
let d1 = 0;
let d2 = 0;
let d3 = 0;
while (d1 < data1.length && d2 < data2.length) {
  if (data1[d1] < data2[d2]) {
    data3[d3] = data1[d1];
    d1++;
  } else {
    console.log("first");
    data3[d3] = data2[d2];
    d2++;
  }
  d3++;
}
while (d1 < data1.length) {
  data3[d3] = data1[d1];
  d1++;
  d3++;
}
console.log(data3);

//for loops

// for (i = 0; i < data1.length; i++) {
//   data3[i] = data1[i];
// }
// for (i = 0; i < data2.length; i++) {
//   data3[data1.length + i] = data2[i];
// }
// console.log(data3);
