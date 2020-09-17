// const words = ["ground", "control", "to", "major", "tom"];

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💥Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (i = 0; i < arr2.length; i++) {
      if (arr1[i] === arr2[i]) {
      } else {
        return false;
      }
    } return true;
  }
};


const map = function(arr, callback){
  const results = []
  for( let word of arr){
    results.push(callback(word))
   
  }
  return results;
};

// const results1 = map(words, word => word[0])

console.log(assertArraysEqual(map(["my","name","is","jay","ho"], word => word[0]),map(["my","name","is","jay"],word => word[0])))

// console.log(map(["dog","cat","mouse"], word => word[0]))