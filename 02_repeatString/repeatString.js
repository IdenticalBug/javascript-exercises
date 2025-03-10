const repeatString = function(string, num) {
    let concatString = '';
    if (num < 0) {
        return 'ERROR';
    }
    for( let i = 1; i <= num; i++){
        concatString += string;
    }
    return concatString;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
