const removeFromArray = function(array, ...removeValue) { // spread syntax creates a list of values, you cant compare a singular element to a list
    return array.filter((element) => !removeValue.includes(element));
};
console.log(removeFromArray(["heyy",2,3,4,5], "heyy"))
// Do not edit below this line
module.exports = removeFromArray;
