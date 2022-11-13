// const func = function (array) {
//   const list = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       //console.log(array[i][j]);
//       list.push(array[i][j]);
//     }
//   }
//   console.log(list);
//   console.log(Math.max(...list));
// };
// let res = func([
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 55, 21, 4, 5, 22, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 22, 8, 9],
// ]);

// function maxNumber(multiDimensionArray) {
//   multiDimensionArray.forEach((element) => {
//    let noReplica= element.filter(
//       (el) => element.filter((ele) => ele===el).length === 1
//     );
//     let max = Math.max(...noReplica)
//     console.log(max)
//   });

// }

// maxNumber(multiDimensionArray);

var multiDimensionArray = [
  [1, 2, 3, 4, 5, 1, 2, 3],
  [6, 7, 9, 11, 1, 2, 7, 11],
  [0, 1, 2, 3],
];

function nonRepetiveHighestNumber(arr) {
  let oneDimension = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (!oneDimension.includes(arr[i][j])) {
        oneDimension.push(arr[i][j]);
      } else {
        oneDimension = oneDimension.filter(function (item) {
          return item !== arr[i][j];
        });
      }
    }
  }
  console.log(oneDimension);
  console.log(Math.max(...oneDimension));
  return arr;
}
nonRepetiveHighestNumber(multiDimensionArray);
