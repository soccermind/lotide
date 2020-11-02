const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
        } // looks like it's throwing a true instead of false for deep arrays.
      } else if (arr1[i] !== arr2[i]) {
     return false;
   } 
  }
  
return true;
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

// nested arrays 
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([0, [2, 3], [5]], [[0, 1], [2, 3], [5]]), false);
assertEqual(eqArrays([[[0, [2, 3], [5]]]], [[[0, [2, 3], [5]]]]), true);
assertEqual(eqArrays([[[1, [2, 3], [5]]]], [[[0, [2, 3], [5]]]]), false); // should be false but it's coming back as true;
assertEqual(eqArrays([[[ 1 ]]], [[[ 2 ]]]), false);