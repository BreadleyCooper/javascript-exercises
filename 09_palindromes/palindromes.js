const palindromes = function (string) {
    // remove all punctuation and spaces from initial string
    let noPunc = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    let finalString = noPunc.toLowerCase().replace(/\s/g,"")
    // convert to array
    let forwardArray = Array.from(finalString)
    // make new array that is reversed
    let reverseArray = [...forwardArray].reverse();
    let reverseString = reverseArray.join("")
    // compare fwd and reverse array
    if (finalString === reverseString){
        return true
    }else return false
};


// Do not edit below this line
module.exports = palindromes;
