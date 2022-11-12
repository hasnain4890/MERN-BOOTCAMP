let func = function (array) {
  const list = [];
  for (i = 0; i < array.length; i++) {
    //console.log(array[i]);
    //if (array[i] !== "c" && array[i] !== "d" && array[i] !== "+") {
    if (parseInt(array[i])) {
      list.push(parseInt(array[i]));
    } else if (array[i] == "c") {
      list.pop();
    } else if (array[i] == "d") {
      list.push(parseInt(list[list.length - 1] * list[list.length - 1]));
    } else if ("+") {
      list.push(
        parseInt(list[list.length - 1]) + parseInt(list[list.length - 2])
      );
    }
  }
  console.log(list);

  // 0 + 1 + 2 + 3 + 4
  //   const initialValue = 0;
  //   const sumWithInitial = list.reduce(
  //     (previousValue, currentValue) => previousValue + currentValue,
  //     initialValue
  //   );
  //   console.log(sumWithInitial);

  let sum = list.reduce(function (prev, curr) {
    console.log(prev);
    console.log(curr);
    return prev + curr;
  });
  console.log(sum);
  return sum;
};
let res = func(["4", "5", "c", "d", "+"]);
