//sum xero problem 
//[5,7,3,21,7,-5,8,-3]
//output [5,-5]


// function getsumpairzero(array){
//     for(let number of array){
//         //console.log(number);
//         for(let j=1; j<array.length; j++){
//             if(number+array[j]===0){
//                 return [number,array[j]];
//             }
//         }
//     }
// }
// const res = getsumpairzero([5,7,3,21,7,-5,8,-3]);
// console.log(res);


//another optimixe solution for above problem statement (using while single loop)
//[-5,-4,-3,,1,2,3,4,8,9]
function sum_zero(array){
    
    //sorted=array.sort(array);
    // a=array.sort();
    // console.log(a)

  left =0;
  right=array.length-1;

 while(array[left]<array[right]){

    sum = array[left]+array[right];
    if(sum ===0){

 return [array[left],array[right]];

    }else if(sum>0){

        right--;

    }else{

        left ++;
    }
     
}
}
 const res = sum_zero([-5,-4,-3,1,2,3,4,8,9]);

 console.log(res);










//4 = 1, 2, 3,4
//0+1+2+3+4+5+6+7+8+9+10=55
//return all sum for example 4=1+2+3+4=10
// function get_total_sum(number){
//     var total=0;
//     for(var i=0 ; i<number+1 ;i++){
//         //console.log(i);
//         var total =total + i;
//     }
//     return total;
    
// }
// const res=get_total_sum(3);
// console.log(res);





//simple sorting
// let a=[5,3,2,1,0];
// console.log(a)
// let sorted=a.sort()
// console.log(sorted);