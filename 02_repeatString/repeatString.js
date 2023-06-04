const repeatString = function(string, num) {
    rword = '';
    if(num < 0) {
        return 'ERROR';
    }
    for(i = 0; i < num; i++) {
        rword += string;
    }
    return rword;
};

// Do not edit below this line
module.exports = repeatString;
