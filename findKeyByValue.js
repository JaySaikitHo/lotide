const assertEqual = require('./assertEqual')


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



const findKeyByValue = function(shows,nameOfShow) {
  for (let show in shows) {
    // console.log(shows[show]);
    if (shows[show] === nameOfShow) {
      return show;
    }
      
  }
};



// console.log(findKeyByValue(bestTVShowsByGenre,"Brooklyn Nine-Nine"))
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;