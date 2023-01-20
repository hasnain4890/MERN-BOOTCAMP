function threeSumZero(array) {
  for (i = 0; i < array.length; i++) {
    one = array[i];
    for (j = 0; j < array.length - 1; j++) {
      if (i != j) {
        if (one + array[j] + array[j + 1] == 0) {
          return [one, array[j], array[j + 1]];
        }
      }
    }
  }
}
res = threeSumZero([-9, 2, -4, 4, 5, 6, -7]);
console.log(res);
