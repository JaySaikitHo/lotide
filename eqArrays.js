const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💥Assertion Failed: ${actual} !=== ${expected}`);
  }
};


const eqArrays = function(arr1, arr2) {
  for (i = 0; i < arr2.length; i++) {
    if (arr1[i] === arr2[i]) {
    } else {
      return false;
    }
  } return true;
};

assertEqual(eqArrays([1,2,3],[1,2,3]), true);

