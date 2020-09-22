const assertEqual = require('./assertEqual')



const findKey = function(obj, callback){
  for(let key in obj){
    if(callback(obj[key])=== true){
      return key;
    } 
  }
  return undefined;
}






console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 5 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 5) )

// assertEqual(findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 5 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
//   }, x => x.stars === 5), "elBulli")

  module.exports = findKey;