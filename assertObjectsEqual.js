const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }


  for (i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }

  }
  return true;
};



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


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`👍Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💥Assertion Failed: ${inspect(actual)} !=== ${inspect(expected)}`);
  }
};
assertObjectsEqual({ a: 1, b: [2], c: 3 }, { a: 1, b: [2], c: 3 });
