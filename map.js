const eqArrays = function(arr1, arr2) {
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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const numbers = [1, 2, 3, 4, 5, 6];
const results2 = map(numbers, number => number * number);
assertArraysEqual(results2, [1, 4, 9, 16, 25, 36]);

const objects = [
  {country: 'Canada', capital: 'Ottawa'},
  {country: 'Mexico', capital: 'Mexico City'},
  {country: 'USA', capital: 'Washington'}
];
const results3 = map(objects, object => object.capital);
assertArraysEqual(results3, ['Ottawa', 'Mexico City', 'Washington']);

const booleans = [true, true, false, false, true];
const results4 = map(booleans, bool => !bool);
assertArraysEqual(results4, [false, false, true, true, false]);

module.exports = map;