const convertToCelsius = function (temperature) {
  return Math.round(((temperature - 32) / 1.8) * 10) / 10; // .round() rounds to the nearest integer, while .floor() rounds down
};

const convertToFahrenheit = function (temperature) {
  return Math.round(((temperature * 1.8) + 32) * 10) / 10;
};
console.log(convertToCelsius(-100))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
