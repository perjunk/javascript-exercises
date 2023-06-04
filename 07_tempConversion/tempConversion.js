const convertToCelsius = function(temp) {
  let c = (5/9)*(temp - 32);
  c = Math.round(c *10) / 10;
  return c;
};

const convertToFahrenheit = function(temp) {
  let f = (temp *(9/5)) + 32;
  f = Math.round(f*10) /10;
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
