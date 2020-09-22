const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');



const without = function(original, removal) {
  let finalArray = [];
  for (x = 0; x < original.length; x++) {
    if (!removal.includes(original[x])) {
      finalArray.push(original[x]);
    } else {
      
    }
    
  } return finalArray;
};

module.exports = without;

console.log(without([1,2,3],[1,2]));

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);