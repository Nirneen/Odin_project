const fibonacci = function(index) {
    if(index < 0) {return "OOPS"}
    if((index == 1) || (index == 2)) {return 1}
    if(index == 0) {return 0}
    let answear = 1
    let previos = 1
    for(let i=3;i<=index;i++){
        let temp = answear;
        answear = answear + previos;
        previos = temp;
    }
    return answear
};

// Do not edit below this line
module.exports = fibonacci;
