const convertToCelsius = function(temp) {

  // 32°F − 32) × 5/9 = 0°C
  let newTemp = (temp - 32) * 5/9;
  console.log("newTemp = " + newTemp);

  if (newTemp == 0)
  {
    return 0;
  }
  return parseFloat(newTemp.toFixed(1))

};

const convertToFahrenheit = function(temp) {

  // C × 9/5) + 32 

  let newTemp = temp * 9/5 + 32;
  
  console.log("newTemp = " + newTemp);

  if (newTemp == 0)
  {
    return 0;
  }
  return parseFloat(newTemp.toFixed(1))


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
