
exports.min = function min (array) {
  if(!array || array.length === 0){
    return 0;
  };
  var minValue = array[0]
  for (let i = 0; i < array.length; i++){
    if (minValue > array[i]) minValue = array[i]
  }
  return minValue
}

exports.max = function max (array) {
  if(!array || array.length === 0){
    return 0;
  };
  var maxValue = array[0]
  for (let i = 0; i < array.length; i++){
    if (maxValue < array[i]) maxValue = array[i]
  }
  return maxValue
}

exports.avg = function avg (array) {
  if(!array || array.length === 0){
    return 0;
  } 
  let aveValue = 0
  for (let i = 0; i < array.length; i++){
    aveValue += array[i]
  }
  return aveValue / array.length
}
