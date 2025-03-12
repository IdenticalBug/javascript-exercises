const leapYears = function(yearArg) {
    if (yearArg % 4 == 0 && yearArg % 100 != 0){
        return true;
    } else if (yearArg % 4 == 0 && yearArg % 100 == 0 
               && yearArg % 400 == 0){
        return true;
    } else {
        return false;
    }

};

console.log(leapYears(1900));

// Do not edit below this line
module.exports = leapYears;
