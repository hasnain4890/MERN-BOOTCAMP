let data = [2, 1, 6, 3, 4, 12, 10, 30, 24, 15, 26];

function bubbleSort() {
  for (i = 0; i < data.length; i++) {
    console.log(data[i]);
    for (j = 0; j < data.length; j++) {
      if (data[j] > data[j + 1]) {
        temp = data[j]; //2=2 
        data[j] = data[j + 1]; // 1=1
        data[j + 1] = temp;  // 1=2
      }
    }
  }
  return data;
}
res = bubbleSort();
console.log(res);
