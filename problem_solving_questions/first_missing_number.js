   
   
   
   var firstMissingPositive = function(nums) {

    var min = 0

    nums.sort((a,b)=>{
      return a-b    
    })
     
    for(let i=0;i<nums.length;i++){
        if(min===nums[i]){
            min++
        }
    }
    
    return min
};
res = firstMissingPositive([0,10,11,1,2,3,4,6,]);
console.log(res);