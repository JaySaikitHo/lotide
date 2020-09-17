const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💥Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (i = 0; i < arr2.length; i++) {
      if (arr1[i] === arr2[i]) {
      } else {
        return false;
      }
    } return true;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };



const lengthCheck = function(obj1, obj2){
  console.log(obj1, obj2)
  let firstKeys = Object.keys(obj1);
  let secondKeys = Object.keys(obj2);
  console.log(firstKeys.length,secondKeys.length)  
  if(firstKeys.length === secondKeys.length){
    return true;
  }
  return false;
}




const eqObjects = function(object1, object2){
  if(lengthCheck(object1, object2)){
    for(let key in object1){
      if(object1[key] !== object2[key]){
        if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
         console.log(object1[key],object2[key]);
          return eqArrays(object1[key], object2[key]);

        }
        
      }
    }
    return true;
    
  } else {
    return false;
  } 
  
}


// console.log(eqObjects(cd, abc))
console.log(assertEqual(eqObjects(cd,dc),true))