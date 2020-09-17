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

const letterPositions = function(input) {
  const finalPositions = {};
  for(let i = 0; i < input.length; i++) {
      let letter = input.charAt(i);
      console.log(letter)
      if(finalPositions[letter]) { //if letter exist, push
        finalPositions[letter].push(i)
      } else { // if not, add the letter to the object as key with an array as the value
        finalPositions[letter] = [i]
        
      }
    } 
    return finalPositions;
  } 
  


console.log(letterPositions("good morning my friend"))