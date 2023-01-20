function sum_par(array, number) {
  for (let i = 0; i < array.length; i++) {
    // let one = array[i];
    // console.log(one);

    // for (let j = i + 1; j < array.length; j++) {
    //   var second = array[j];
    // }
    if (array[i] + array[i + 1] == number) {
      console.log(array[i], array[i + 1]);
    }
  }
}
sum_par([1, 2, 3, 5, -8,6, 7, 8, 9], 15);
