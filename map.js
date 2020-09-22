

const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');


const map = function(arr, callback){
  const results = []
  for( let word of arr){
    results.push(callback(word))
   
  }
  return results;
};

module.exports = map;

// const results1 = map(words, word => word[0])

// console.log(assertArraysEqual(map(["my","name","is","jay","ho"], word => word[0]),map(["my","name","is","jay"],word => word[0])))

// console.log(map(["dog","cat","mouse"], word => word[1]))