const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let results = {};
  for (let letter of sentence) {
    if (letter === ' ') {
      // skip
    } else if (results[letter]) {
      results[letter]++;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

const result1 = countLetters("lighthouse labs");
assertEqual(result1['l'], 2);
assertEqual(result1['i'], 1);
assertEqual(result1['g'], 1);
assertEqual(result1['h'], 2);
assertEqual(result1['t'], 1);
assertEqual(result1['o'], 1);
assertEqual(result1['u'], 1);
assertEqual(result1['s'], 2);
assertEqual(result1['e'], 1);
assertEqual(result1[' '], undefined);
assertEqual(result1['a'], 1);
assertEqual(result1['b'], 1);
assertEqual(result1['x'], undefined);

module.exports = countLetters;