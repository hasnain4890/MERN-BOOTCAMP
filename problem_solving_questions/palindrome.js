

var ispal = function(int){
    const tostr = int.toString();
    console.log(tostr);
    const tospl = tostr.split('');
    console.log(tospl);
    const torev = tospl.reverse();
      console.log(torev);
    const tojoin = torev.join('');
      console.log(tojoin);

    if(int==tojoin){
        return console.log("palindrome");
    }else{
        console.log("not palindrome")
    }

    return tojoin;


}
res = ispal(12441);
console.log(res);

// const reverse = (int) => {
//     const toStr = int.toString();
//     const toArr = toStr.split('');
//     const rev = toArr.reverse();
//     return parseInt(rev.join(''));
// }

// var isPalindrome = function(x) {
//     return x === reverse(x);
// }

// res= isPalindrome(121);
// console.log(res);
