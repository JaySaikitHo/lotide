const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("👍Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("💥Assertion Failed: " + actual + " !=== " + expected);
  }
};

// TEST CODE
console.log(assertEqual("Bootcamp", "Bootcamp"));
console.log(assertEqual(1, "1"));