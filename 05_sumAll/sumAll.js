
const sumAll = function(firstInt, lastInt) {

    let sum = 0;
    if (firstInt < 0 || lastInt < 0){
        return 'ERROR';

    } else if (!Number.isInteger(firstInt) || !Number.isInteger(lastInt)){
        return 'ERROR';

    } else if (firstInt > lastInt){
        placeHolderInt = firstInt
        firstInt = lastInt;
        lastInt = placeHolderInt;
    }

    for (let i = firstInt; i <= lastInt; i++){
        sum += i;
    }
    return sum;
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
