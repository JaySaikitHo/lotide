const assertEquals = require("../assertEqual");
const assertArraysEqual = require("../assertArraysEqual");
const { assert } = require("chai");

assertArraysEqual([1,5,3],[1,2,3])//shoulde be false
assertArraysEqual(["A","B","C"],["A","B","C"])//should be true