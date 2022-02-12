const sumAll = function(a,b) {
    // Convert the inputs into an array, sort by size
    let array = [a,b];
    array.sort(function(a, b){return a - b});
    // Create a variable for the sum
    let sum = 0;
    // Set a and b as ints(Bigints?) from the sorted array
    a = array[0];
    b = array[1];
    // Loop that starts at the lowest number of the two and adds one to the sum each time until the larger number (inclusive) is reached)
    for (let i=a;i<=b;i++){
        sum += a++;
    } 
return sum    
};


// Do not edit below this line  
module.exports = sumAll;
