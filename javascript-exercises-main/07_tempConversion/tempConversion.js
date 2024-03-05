const convertToCelsius = function(tempuraturaF) {
    let celsius = (tempuraturaF - 32) * 5 / 9
    let celsius1 = Math.round(celsius * 10) / 10
    return celsius1
};

const convertToFahrenheit = function(tempuraturaC) {
  let fahrenheit = (tempuraturaC * 9 / 5) + 32
  let fahrenheit1 = Math.round(fahrenheit * 10) / 10
  return fahrenheit1
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
