const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  if (typeof arr1 !== typeof arr2) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      // if first element is an arrays recursively call eqArrays
        if (arr1[i].length !== arr2[i].length) {
          return false;
        } else {
          if (eqArrays(arr1[i], arr2[i])) {
            // keep going if true
          } else {
            return false; // inequality found, end function.
          };
        } 
      } else if (arr1[i] !== arr2[i]) {
     return false;
   } 
  }
  
return true;
};

module.exports = eqArrays;