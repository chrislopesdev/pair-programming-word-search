const transpose = require('./transposeMatrix')

const wordSearch = (letters, word) => {
  const vertArray = transpose(letters);
  const verticalJoin = vertArray.map(ls => ls.join(''));
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  
  for (const vert of verticalJoin) {
    horizontalJoin.push(vert);
  }
  
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  // for (const l of verticalJoin) {
  //   if (l.includes(word)) return true;
  // }
  // console.log(verticalJoin)
  // console.log(horizontalJoin)
  return false;
};

// wordSearch([
//       ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//       ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//       ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//       ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//       ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//       ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//       ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//       ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//       ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//     ], 'FRANK')

module.exports = wordSearch;