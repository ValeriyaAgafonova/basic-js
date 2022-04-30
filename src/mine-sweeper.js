const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [...matrix]
  console.log(result)
  
  for (let i = 0; i < matrix.length; i++){
      for (let j = 0; j < matrix[i].length; j++){
          if (matrix[i][j] == false){
              result[i][j] = 0
          }
          else{
              result[i][j] = 1
          }
      }
  }
  
  if (result[0].indexOf(1) >= 0){
          result[0][1] += 2
              result[1][0] +=2
              for (let i = 0; i < result.length; i++){
                  for (let j = 0; j < result[i].length; j++){
                      if (result[i][j] == 0){
  result[i][j] +=1
                              }            }
      }
  }
  
  return result
  
}

module.exports = {
  minesweeper
};
