const reverseString = function(string) {
    let arrayString = string.split("");
    let arrayLength = arrayString.length;
    let reversedArray = [];
    let j = arrayLength - 1;
    //Reverse the array by looping through getting the length of array and reversing within the loop
    // Access the last array element and add it to the empty reversedArray variable
    // Once looped through whole array, convert the array to a string
    for(let i = 0; i < arrayLength; i++){
            let arrayChar = arrayString[j];
            reversedArray[i] = arrayChar;
            j--;
    }
    return reversedArray.join("");
};

reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
