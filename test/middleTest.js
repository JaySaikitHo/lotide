const getMid = require('../middle');

const assert = require('chai').assert;

describe("#middleTest", () => {
  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(getMid([1,2,3,4,5,6]),[3,4]);
  });
  
  it("returns [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(getMid([1,2,3,4,5]),[3]); 
  });
  it("returns ['c','A'] for ['B','c','A','E']", () => {
    assert.deepEqual(getMid(['B','c','A','E']),['c','A']); 
  });
});

