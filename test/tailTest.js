const assert = require('chai').assert;

const tail = require('../tail');

describe("#tailTest", () => {
  it("returns ['b',3] for [1,'b',3]", () => {
    assert.deepEqual(tail([1,'b',3]),['b',3]);
  });
  
  it("returns [2,3,4,5] for [1,2,3,4,5]", () => {
    assert.deepEqual(tail([1,2,3,4,5]),[2,3,4,5]); 
  });
  it("returns ['c','A','E'] for ['B','c','A','E']", () => {
    assert.deepEqual(tail(['B','c','A','E']),['c','A','E']); 
  });
});




