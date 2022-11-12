const func = function (array) {
  const list = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      //console.log(array[i][j]);
      list.push(array[i][j]);
    }
  }
  console.log(list);
  console.log(Math.max(...list));
};
let res = func([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 55, 21, 4, 5, 22, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 22, 8, 9],
]);
