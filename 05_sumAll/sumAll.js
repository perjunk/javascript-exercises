const sumAll = function(start, end) {
    let returnNum = 0;
    if(typeof start != 'number' || typeof end != 'number') {
        return('ERROR');
    }
    else if(start < 0 || end < 0) {
        return 'ERROR';
    }
    else if(start < end) {
        for(i = start; i <= end; i++) {
            returnNum += i;
        }
        return returnNum;
    } else {
        for(i = end; i <= start; i++) {
            returnNum += i;
        }
        return returnNum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
