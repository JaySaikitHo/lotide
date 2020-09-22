const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

// SAMPLE OBJECTS
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };








const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    console.log(Object.keys(object1).length, Object.keys(object2).length);
    return false;
  }



  for (let key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1)) {

      if (!eqArrays(value1, value2)) {
        return false;
      }


    } else if (value1 !== value2) {
      console.log(object1[key], object2[key]);
      return false;
    }

  }
  return true;
};


module.exports = eqObjects;

// console.log(eqObjects(cd, dc))
// console.log(assertEqual(eqObjects(cd,dc),true))