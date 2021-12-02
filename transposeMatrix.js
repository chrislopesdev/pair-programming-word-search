const transpose = function(matrix) {
  let result = []; // create empty result array
  
  for (let i = 0; i < matrix[0].length; i++) {
    let tempArr = []; // create tempArr to hold sub arrays
    for (let j = 0; j < matrix.length; j++) {
      tempArr.push(matrix[j][i]); //transpose positions of x/y
    }
    result.push(tempArr); // push tempArr to result array
  } 
  return result;
};

module.exports = transpose;