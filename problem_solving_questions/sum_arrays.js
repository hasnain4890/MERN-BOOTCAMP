function sum_array(arr) {
  // store our final answer
  var sum = 0;
  // loop through entire array
  for (var i = 0; i < arr.length; i++) {
    // loop through each inner array
    for (var j = 0; j < arr[i].length; j++) {
      // add this number to the current final sum
      sum += arr[i][j];
    }
  }

  return sum;
}

console.log(
  sum_array([
    [3, 2, 10],
    [1, 10, 10],
    [4, 12, 10, 10],
  ])
);

// using reduce method
function sumArray(arr) {
  return arr.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e);
}
console.log(
  sumArray([
    [3, 2, 10],
    [1, 10, 10],
    [4, 12, 10, 12, 10],
  ])
);
