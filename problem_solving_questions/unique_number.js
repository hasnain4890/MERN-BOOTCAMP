// ES6 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

unique = Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]
console.log(unique);

// ES5 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
unique2 = uniqueArray(array); // [1, 2, 3, 5, 9, 8]
console.log(unique2);

function uniqueArray(array) {
  var hashmap = {};
  var unique = [];

  for (var i = 0; i < array.length; i++) {
    // If key returns undefined (unique), it is evaluated as false.
    if (!hashmap.hasOwnProperty(array[i])) {
      //console.log("checking");
      hashmap[array[i]] = 1;
      unique.push(array[i]);
    }
  }

  return unique;
}
res = uniqueArray([1, 2, 3, 5, 1, 5, 9, 1, 2, 8]);
console.log(res);
