function recursiveBinarySearch(arr) {
  start = 0;
  end = arr.length - 1;
  find = 5;

  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == find) {
    return find;
  }
  if (arr[mid] > find) {
    return recursiveBinarySearch(arr, mid - 1);
  }
  if (arr[mid] < find) {
    return recursiveBinarySearch(arr, mid + 1);
  }
}
res = recursiveBinarySearch([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 17, 18, 19,
]);
console.log(res);
