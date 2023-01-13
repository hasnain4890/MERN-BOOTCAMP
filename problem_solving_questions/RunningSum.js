const RunningSum = (array) => {
  sum = 0;
  ans = [];
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    ans[i] = sum;
    console.log(ans[i]);
  }

  console.log(ans);
};
RunningSum([1, 2, 3, 4, 5, 6]);
