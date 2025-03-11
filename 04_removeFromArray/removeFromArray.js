const removeFromArray = function(arrayArg, ...removeFromArray) {
//Create a new array, create loops to loop through both arrayArg and removeFromArray
//if the element is not found in arrayArg, move to the next element of arrayArg
// else move on and check the next element
for(let i = 0; i <= arrayArg.length; i++){
    
    for(let j = 0; j < removeFromArray.length;){
        if(arrayArg[i] === removeFromArray[j]){
            arrayArg.splice(i, 1);
            j--;
        }
        else{
            j++;
            continue;
            
        }
    }
}
return arrayArg;
};

removeFromArray([1,2,3,4,5],3,2);



// Do not edit below this line
module.exports = removeFromArray;
