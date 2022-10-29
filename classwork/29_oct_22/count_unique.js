// i j
//[1,2,3,2,3,3,4,5,6,7,8,8]
//if i and j are equal , do nothing just increment in J.

function count_unique(array){

    if(array.length>0){
         i = 0;
        for(let j=1;j<array.length; j++){
            console.log(array[j]);
                if(array[i]!==array[j]){
                    i++;
                    array[i]=array[j];
                }

        }
         console.log("unique numbers count is:");
        return i+1;
    
    }
    else{
        throw new console.error("array is empty");
    }
}
res=count_unique([1,1,2,2,3,3,4,5,6,7,8,8,9,10,10,50,60]);
console.log(res);