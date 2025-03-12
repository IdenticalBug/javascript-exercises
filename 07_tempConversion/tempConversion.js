const convertToCelsius = function(fahrenheitTemp) {
  let convertedCelsius = (fahrenheitTemp - 32) * 5/9
  const roundedCelsius = Math.round(convertedCelsius * 10) / 10;
  
  return roundedCelsius;
};

const convertToFahrenheit = function(celsiusTemp) {
  let convertedFahrenheit = (celsiusTemp * 9/5 + 32);
  const roundedFahrenheit = Math.round(convertedFahrenheit * 10) / 10;

  return roundedFahrenheit;
};

convertToFahrenheit(73.2)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
