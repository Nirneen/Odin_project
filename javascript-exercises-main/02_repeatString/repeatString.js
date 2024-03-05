const repeatString = function(str, num) {
    if(num < 0){
        return 'ERROR'
    }
    const multstr = str.repeat(num)
    return multstr
};

// Do not edit below this line
module.exports = repeatString;
