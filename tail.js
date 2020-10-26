const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = arr.slice();
  newArr.shift();
  return newArr;
};

// Test case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// Test case 2: Confirm that original array is not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

// Test case 3: an array with one element should yield and empty array
const one = ["Hello"];
const zero = tail(one);
assertEqual(zero.length, 0);

// Test case 4: and empty array should yield and empty array
const none = [];
const empty = tail(none);
assertEqual(none.length, empty.length);
