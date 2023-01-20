function uniqueSum(string) {
  arr = [];
  for (i = 0; i < string.length; i++) {
    if (!arr.includes(string[i])) {
      arr.push(string[i]);
    }
  }
  str = arr;
  join = str.join("");
  return str;
}
res = uniqueSum("hasnain");
console.log(res);
