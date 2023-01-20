const pushNumber = (array) => {
  //console.log("first");
  let position = 2;
  let value = 10;

  for (let i = 0; i < array.length; i++) {
    console.log("array length", array.length);
    if (i == position) {
      array[i + 1] = array[i];
      array[i] = value;
    }
    console.log(array[i]);
  }
};

res = pushNumber([1, 2, 3, 4, 5]);
console.log(res);
