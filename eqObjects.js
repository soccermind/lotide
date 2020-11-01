const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key in object1) {
      if (object2[key] === undefined) {
        // key from object1 does not exist in object2
        return false;
      } else if (typeof object1[key] !== typeof object2[key]) {
        // values of the same key are of different type
        return false;
      } else if (Array.isArray(object1[key]) && !eqArrays(object1[key], object2[key])) {
        // values of the same key are different arrays
        return false;
      } else if (!Array.isArray(object1[key]) && typeof object1[key] === 'object') {
        // nested object, recursivelly call eqObject
        return eqObjects(object1[key], object2[key]);;
      } else if (!Array.isArray(object1[key]) && object1[key] !== object2[key]) {
        // values of the same key are not array and do not match
        return false;
      } 
    }
  }
  return true;
};

// TEST CODE
// Primitives as values scenario:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

// // Arrays as values scenario:
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

// objects as values scenario:
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({ a: { y: { alpha: 0, beta: { first: 1, second: {cero: 0, uno: 1} } }, z: 1 }, b: 2 },  { a: { y: { alpha: 0, beta: { first: 1, second: {cero: 0, uno: 1} } }, z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: { alpha: 0, beta: { first: 1, second: {cero: 0, uno: 1} } }, z: 1 }, b: 2 },  { a: { y: { alpha: 0, beta: { first: 1, second: 2 } }, z: 1 }, b: 2 }), false);
