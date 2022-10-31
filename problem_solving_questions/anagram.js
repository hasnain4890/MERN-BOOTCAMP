
//anagram is same length , equal number of repeated letters.
// for example hello --> lloeh 

function anagram(string1,string2){

    if(string1.length!==string2.length){
        return false;
    }
    
        let counter = {};
        for(letter of string1){
           // console.log(letter);
           counter[letter]=(counter[letter] || 0) + 1;
           console.log(counter[letter]);
           
        }
        for (item of string2){
            
           console.log(item);
           if(!counter[item]){

            return false;

           }else{
               counter[item]=counter[item] -1;
           }
        }
        return true;
     
   

}
result=anagram("helllo","lllohe");
console.log(result);