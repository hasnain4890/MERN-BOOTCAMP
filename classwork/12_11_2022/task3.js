// write a function that accepts two arguments , one is array and second is interger
//take out that pair from array that if we sum that pair , it sum will will be the second output
//  ([1,5,1,4,8],9)
//output: pair with a given sum 9 is [4,5]

const sum_pair = function (array, number) {
  const arraylist = [];
  for (let i = 0; i < array.length - 1; i++) {
    //console.log(array[i]);
    for (let j = i + 1; j < array.length; j++) {
      //console.log(array[j]);
      if (array[i] + array[j] == number) {
        arraylist.push([array[i], array[j]]);
        //console.log("the sum pair are " + array[i], array[j]);
        //console.log("mil gya pair");
      }
    }
  }
  return arraylist;
};
res = sum_pair([0, 5, 6, 8, 10, 3, 12], 15);
console.log(res);
