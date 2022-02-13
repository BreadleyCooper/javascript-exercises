const leapYears = function(year) {
   if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
       return true
   }else
   return false
   
//    If the year is divisiblie by 4 and 400, true. If divisible by 100 and NOT 400, false
 // Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
};

// Do not edit below this line
module.exports = leapYears;

