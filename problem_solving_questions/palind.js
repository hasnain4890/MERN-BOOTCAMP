function palindrome(string) {
  console.log(string);
  split = string.split("");
  //split = split.toString();
  reverse = split.reverse();
  console.log(reverse);
  //reverse = reverse.toString();
  join = reverse.join("");
  console.log(join);

  if (split === join) {
    console.log("true");
  } else {
    console.log("false");
  }
}
palindrome("madamo");
