// Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed: %O === %O", actual, expected);
  } else {
    console.log("🛑🛑🛑Assertion Failed: %O !=== %O", actual, expected);
  }
};

// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Winter", "Winter");
assertEqual(1, 3);
assertEqual('1', 1);
assertEqual(true, false);
assertEqual(true, true);
