//find index

function binarySearch(arr) {
  start = 0;
  end = arr.length - 1;
  find = 5;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] == find) {
      index = mid;
      return index;
    } else if (arr[mid] < find) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}
res = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
console.log(res);
