const assertEqual = require('./assertEqual')

const countLetters = function(input) {
  const letterCount = {};
  for(const letter of input) {
    console.log(letter)
    if(letterCount[letter]) {
      letterCount[letter] += 1
    } else {
      letterCount[letter] = 1
    }
  } return letterCount;

}

module.exports = countLetters;

// console.log(countLetters("the quick brown fox jumped over the lazy old dog"))