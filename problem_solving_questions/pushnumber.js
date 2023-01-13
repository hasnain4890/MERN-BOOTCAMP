const pushNumber = (array) => {
  //console.log("first");
  let position = 2;
  let value = 10;

  for (let i = 0; i < array.length; i++) {
    if (i == position) {
      array[i] = value;
    }
    console.log(array[i]);
  }
};
pushNumber([1, 2, 3, 4, 5]);
