const add = function(a, b) {
    let sum = a + b
    return sum
};

const subtract = function(a, b) {
    let sum  = a - b 
    return sum
};

const sum = function(array) {

  let sum1 = 0  
  sum1 = array.reduce((previousValue, currentValue) => previousValue + currentValue, 0); 
    return sum1
};

const multiply = function(array) {
    let sum1 = 1
    for (let i=0; i<array.length; i++){
      sum1 = sum1 * array[i]
    }
    return sum1
};

const power = function(a,b) {
	let sum = 0;
  for (i=0;i<=b;i++){
    sum += a*a;
  }
  return sum
  
};

const factorial = function(a) {
    if (a === 0) return 1;
    let result = 1;
    for (let i=a;i>0;i--){
        result *= i ;
    }
    return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
