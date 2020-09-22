const assertEqual = require('./assertEqual')




const tail = function(arr) {
  let remainder = arr.slice(1);
  return remainder;
};



module.exports = tail