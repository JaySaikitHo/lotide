const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`👍Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`💥Assertion Failed: ${actual} !=== ${expected}`);
    }
  }

const head = function(arr) {
  let first = arr[0];
  return first;
}

assertEqual(head(["byebye"]), "hello");