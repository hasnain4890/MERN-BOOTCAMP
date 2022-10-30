const temp_converter = (temp, check) => {
  if (check == "cel" || check == "CEL") {
    return (temp * 9) / 5 + 32;
  } else if (check == "fah" || check == "FAH") {
    return (temp - 32) / 1.8;
  }
};
res = temp_converter(100, "cel");
console.log("the celcius of 23 in farenheit is", res);
res1 = temp_converter(212, "fah");
console.log("the fahrenheit of 73.4 in farenheit is", res1);
