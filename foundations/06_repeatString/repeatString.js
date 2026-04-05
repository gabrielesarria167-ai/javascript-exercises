const repeatString = function (string, loops) {
    if (loops >= 0) {
        let base = "";
        for (let i = 0; i < loops; i++) {
            base += string;
        }
        return base;
    }
    return "ERROR";
};
// Do not edit below this line
module.exports = repeatString;
