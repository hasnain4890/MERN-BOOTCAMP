//filter is used to filters all the elements and returns the element that matches
// find function will return a value

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const array2 = array1.find((element) => {
  //console.log(array1);
  return element == 4;
});
console.log(array2);

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array4 = array1.filter((element) => {
  //console.log(array1);
  return element == 4;
});
console.log(array4);

// array1.pop();     // pop function will delete at the end of array
// array1.push(10); // push function will insert at the end of array
//array1.shift(0); // delete from start
//array1.unshift(10); // insert at start point

//console.log(array1[2]);
//console.log(array1);
