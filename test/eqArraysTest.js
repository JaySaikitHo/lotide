const assertEquals = require("../assertEqual");
const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns false for [1,5,3],[1,2,3]", () => {
    assert.strictEqual(assertArraysEqual([1,5,3],[1,2,3]));
  });
  
  it(`returns true for ["A","B","C"],["A","B","C"]`, () => {
    assert.strictEqual(assertArraysEqual(["A","B","C"],["A","B","C"])); 
  });
  it(`returns false for [],["A","B","C"]`, () => {
    assert.strictEqual(assertArraysEqual([],["A","B","C"])); 
  });
});








// assertArraysEqual([1,5,3],[1,2,3])//shoulde be false
// assertArraysEqual(["A","B","C"],["A","B","C"])//should be true