const ftoc = function(temp) {
  let tempc = (temp - 32)*0.556 
  return Math.round(tempc*10)/10 
};

const ctof = function(temp) {
  let tempf = temp *(9/5) + 32
  return Math.round(tempf*10)/10 ;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
