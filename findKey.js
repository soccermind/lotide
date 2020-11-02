const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');

assertEqual(findKey({
  Canada: { capital: 'Ottawa', popInMil: 38 },
  Mexico: { capital: 'Mexico City', popInMil: 126 },
  USA: { capital: 'Washington', popInMill: 328 }
}, obj => obj.popInMil < 100), 'Canada');

assertEqual(findKey({
  Canada: { capital: 'Ottawa', popInMil: 38 },
  Mexico: { capital: 'Mexico City', popInMil: 126 },
  USA: { capital: 'Washington', popInMill: 328 }
}, obj => obj.capital === 'Paris'), undefined);

assertEqual(findKey({
  Canada: { capital: 'Ottawa', popInMil: 38 },
  Mexico: { capital: 'Mexico City', popInMil: 126 },
  USA: { capital: 'Washington', popInMill: 328 }
}, obj => obj.popInMil > 100), 'Mexico');

module.exports = findKey;