const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
};


// TEST CODE:
const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const northAmericanCapitals = {
  Canada: "Ottawa",
  Mexico: "Mexico City",
  USA: "Washington"
};
assertEqual(findKeyByValue(northAmericanCapitals, "Ottawa"), "Canada");
assertEqual(findKeyByValue(northAmericanCapitals, "Mexico City"), "Mexico");
assertEqual(findKeyByValue(northAmericanCapitals, ""), undefined);

const emptyObj = {};
assertEqual(findKeyByValue(emptyObj, "Value"), undefined);
assertEqual(findKeyByValue(emptyObj, ""), undefined);

module.exports = findKeyByValue;