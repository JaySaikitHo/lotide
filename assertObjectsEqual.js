const eqArrays = require("./eqArrays");

const eqObjects = require('./eqObjects')


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`👍Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💥Assertion Failed: ${inspect(actual)} !=== ${inspect(expected)}`);
  }
};
// assertObjectsEqual({ a: 1, b: [2], c: 3 }, { a: 1, b: [2], c: 3 });

module.exports = assertObjectsEqual;