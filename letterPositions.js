const assertArraysEqual = require("./assertArraysEqual")

const eqArrays = require("./eqArrays")

const letterPositions = function(input) {
  const finalPositions = {};
  for(let i = 0; i < input.length; i++) {
      let letter = input.charAt(i);
      
      if(finalPositions[letter]) { //if letter exist, push to that property of object
        finalPositions[letter].push(i)
      } else { // if not, add the letter to the object as key with an array as the value
        finalPositions[letter] = [i]
        
      }
    } 
    return finalPositions;
  } 
  


module.exports = letterPositions;
  console.log(letterPositions("good morning my friend"))