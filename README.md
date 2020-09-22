# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shinsensakana/lotide`

**Require it:**

`const _ = require('@shinsensakana/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `without(arr1, arr2)`: searches arr2 and removes them from arr1

* `tail(arr)`: returns arr from index 1

* `takeUntil(arr, callback)`: creates a new array from the index 0 to where the callback        function is true. The callback function loops through each item in arr. You provide the callback function. 
 
   eg. const results1 = takeUntil(arr, x => x < 0);
  
* `map(arr, callback)` : returns an array from arr with a callback function you want to run on each item of arr. 

  eg. console.log(map(["dog","cat","mouse"], word => word[1])) should return "o","a","o".

* `middle(arr)`: returns the middle element of the array. In an even numbered array it will return the two middle elements.

* `letterPositions(str)`: creates an object with arrays for each unique letter in the string and logs their index in the string.

* `head(str)`: creates an array with the first letter of the string.

* `flatten(arr)`: creates a flat array from nested arr.

* `findKeyByValue(value)`: returns the genre(key) of a TV show based on the name of the show(value) 

* `findKey(obj, callback)` : loops through a list of hotels(object) and searchs with a callback function you provide for ratings(values) and returns the name of the hotel(key).

eg. console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 5 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5) )

* `eqObjects(obj)`: checks two objects if they are equal.

* `eqArrays(arr)`: checks two arrays if they are equal.

* `countOnly(arr1, arr2)`: checks two arrays and will create a new object for all names that are in both arr1 and arr2 if the name has a true value in arr2.

* `countLetters(string)`: counts how many unique letters are in the string and how many times they repeat in an object.
* `assertObjectsEqual(obj1, obj2)`: returns a true or false based after comparing two objects to see if they are equal.

* `assertEqual(expected, result)`: returns a true or false if the expected or results are strictly equal

* `assertArraysEqual(arr1,arr2)`: returns a a true or false after comparing 2 arrays to see if they are strictly equal.