const sumAll = function(a,b) {
    // Check the input is correct
    if ((a < 0) || (b < 0)){
        return ("ERROR");
    } else if (isNaN (a) || isNaN (b)) {
        return ("ERROR");
    } else {
    // Convert to array and sort by value low to high
    let array = [a,b];
    array.sort(function(a, b){return a - b});
    // Create a variable for the sum
    let sum = 0n;
    // Set a and b as ints(Bigints?) from the sorted array
    a = BigInt(array[0]);
    b = BigInt(array[1]);
    // Loop that starts at the lowest number of the two and adds one to the sum each time until the larger number (inclusive) is reached)
    for (let i=a;i<=b;i++){
        sum += a++;
    } 
return sum    
}};



// Do not edit below this line  
module.exports = sumAll;
