const sumAll = function(start, end) {
    if(!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if(start < 0 || end < 0) return "ERROR";
    if(start > end){
        [start,end] = [end, start];
    }
    let sum = start;
    while(start<end){
        ++start;
        sum += start;
    }
    return sum;
};
console.log(sumAll(1,"hey"));
// Do not edit below this line
module.exports = sumAll;
