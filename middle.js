

const getMid = function(arr){
  let middleArray = [];
  if(arr.length <= 2){
    return arr
  } else if(arr.length % 2 === 0) { //if array.length is even;
      middleArray.push(arr[Math.floor(arr.length/2)-1]);
      middleArray.push(arr[Math.floor(arr.length/2) ]);
  } else if(arr.length % 2 !== 0){ //if array.length is odd;
      middleArray.push(arr[Math.floor(arr.length/2)]);
  } 
  return middleArray;
}



module.exports = getMid;