const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💥Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const words = [];

const tail = function(arr) {
  let remainder = arr.slice(1);
  return remainder;
};

tail(words);
assertEqual(words.length, 0);

// let test = tail(["A","B","C"])

// const arrCheck = function(arr1, arr2){
//   for(i = 0; i < arr2.length; i++){
//     if(arr1[i] === arr2[i]) {console.log(`${arr1[i]} is equal to ${arr2[i]}`)
//   } else { console.log("not equal")
//     }
//   }
// }


// arrCheck(test,["B","D"])