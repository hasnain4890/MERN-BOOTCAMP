data = [60, 30, 40, 10, 67];
let newEl = 55;
let position = 2;

for (let i = data.length - 1; i >= 0; i--) {
  //   console.log(data[i]);

  if (i >= position) {
    data[i + 1] = data[i];
    if (i == position) {
      data[i] = newEl;
    }
  }
}

// data[data.length + 1] = 2;
console.log(data);
