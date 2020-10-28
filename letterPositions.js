const eqArrays = function(arr1, arr2) {
  // let output = false;
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      // skip
    } else if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [ i ];
    }
  }
  return results;
};


// TEST CODE
const result1 = letterPositions("hello");
assertArraysEqual(result1['h'], [ 0 ]);
assertArraysEqual(result1['e'], [ 1 ]);
assertArraysEqual(result1['l'], [ 2, 3 ]);
assertArraysEqual(result1['o'], [ 4 ]);
