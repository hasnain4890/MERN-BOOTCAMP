// linear Seach Algo.
// find index of given number
function linearSearch(data) {
  find = 65;
  index = undefined;
  for (i = 0; i < data.length; i++) {
    if (data[i] == find) {
      index = i;
      return index;
    }
  }
}
res = linearSearch([1, 2, 65, 43, 22, 12, 76, 298]);
console.log(res);
