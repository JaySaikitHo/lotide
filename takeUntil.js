const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');



// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


const takeUntil = function(arr, callback) {
  let results = [];
  for (item of arr) {
    if (callback(item) === false) {
      results.push(item);
    } else {
      return results;
    }
  }
};


module.exports = takeUntil;





// assertArraysEqual(takeUntil(["I","have","a","big",",","red",",","car"], x => x === ','),takeUntil(["I","have","a","big",",","red",",","car"], x => x === ','))


// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1)


// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);