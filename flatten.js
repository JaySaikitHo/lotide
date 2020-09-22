const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');






const flatten = function (arr) {
  const flattened = [];
  for (x = 0; x < arr.length; x++) {
    if (!Array.isArray(arr[x])) {
      flattened.push(arr[x]);
    } else {
      for (i = 0; i < arr[x].length; i++) {
        
        flattened.push(arr[x][i]);
      }
    }
  } 
  return flattened;
};

// console.log(flatten([['A'],['B','C'],['D'],'E']));

module.exports = flatten;