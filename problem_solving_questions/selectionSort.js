//use two loops
// check the 1st number with all the array and swap the smallest number with 1st index number and so on

function selectionSort(arr) {
  let min_ind;
  for (i = 0; i < arr.length; i++) {
    min_ind = i;
    // console.log(min_ind);
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[min_ind]) {
        min_ind = j;
      }
    }
    let temp = arr[min_ind];
    arr[min_ind] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
res = selectionSort([3, 2, 46, 43, 45, 1, 98, 90, 199, 0]);
console.log(res);
