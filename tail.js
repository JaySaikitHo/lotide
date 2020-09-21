const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💥Assertion Failed: ${actual} !=== ${expected}`);
  }
};



const tail = function(arr) {
  let remainder = arr.slice(1);
  return remainder;
};



module.exports = tail