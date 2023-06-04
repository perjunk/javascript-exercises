const reverseString = function(string) {
    let reverse = '';
    let letters = string.split("");
    for(i = 0; i < string.length; i++) {
        let letter = letters.pop();
        reverse += letter;
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
