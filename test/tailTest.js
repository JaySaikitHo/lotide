const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const tail = require('../tail');

const words = [1,"b",3];

assertArraysEqual(tail(words), ["b",3]); //should be true;
assertArraysEqual(tail(words), ["c",3]) //should be false;