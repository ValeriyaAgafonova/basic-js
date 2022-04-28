const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let res = []
  let matr = [...matrix]
  for (let i = 0; i < matr.length; i++){
   
  for(let j = 0; j < matr[i].length; j++){
    if (matr[i][j] == "^^" || matr[i][j] == '^^') {
     res.push(1)
    }
  }
 }
  return res.length
}

module.exports = {
  countCats
};
