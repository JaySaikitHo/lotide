const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns true for `bootcamp` and `bootcamp", () => {
    assert.strictEqual(assertEqual("bootcamp","bootcamp"));
  });
  
  it("returns false for `bootcamp` and 1 ", () => {
    assert.strictEqual(assertEqual("bootcamp",1)); 
  });

});


