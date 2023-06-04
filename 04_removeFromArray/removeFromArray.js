const removeFromArray = function(array, ...args) {
    const updatedArray = [];
    array.forEach(item => {
        if(!args.includes(item)){
            updatedArray.push(item);
        }
    });
    return updatedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
