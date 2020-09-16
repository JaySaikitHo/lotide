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

const middleArray = []

const middle = function(arr){
  console.log(arr)
  if(arr.length <= 2){
    return middleArray
  } else {
    getMid(arr);
  }
  return middleArray;
}

const getMid = function(input){
  // if array.length is even
    if(input.length % 2 === 0) {
      middleArray.push(input[Math.floor(input.length/2)-1]);
      middleArray.push(input[Math.floor(input.length/2) ]);
  } else if(input.length % 2 !== 0){ //if array.length is odd
      middleArray.push(input[Math.floor(input.length/2)]);
  } 
  return middleArray;
}

console.log(assertArraysEqual([1,2,3,4,5],middle([1,2,3,4,5])));