const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💥Assertion Failed: ${actual} !=== ${expected}`);
  }
};



const countLetters = function(input) {
  const letterCount = {};
  for(const letter of input) {
    console.log(letter)
    if(letterCount[letter]) {
      letterCount[letter] += 1
    } else {
      letterCount[letter] =1
    }
  } return letterCount;

}


console.log(countLetters("the quick brown fox jumped over the lazy old dog"))