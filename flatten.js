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

const flattened = [];

const arrayExtractor = function(nestedArray) {
  for(i = 0; i < nestedArray.length; i++){
      flattened.push(nestedArray[i]);
  }
}



const flatten = function(arr) {
  
  for(x = 0; x < arr.length; x++){
    if(!Array.isArray(arr[x])) {
       flattened.push(arr[x])
    } else {
      arrayExtractor(arr[x]);
    }
  } return flattened;
}

console.log(flatten([[1, 2], [3, 4], 5, [6]]))