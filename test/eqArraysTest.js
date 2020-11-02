const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

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