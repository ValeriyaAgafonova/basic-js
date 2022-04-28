const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let result = '';
  let counter = 1;
   for (let i = 0; i < arr.length; i++){
   if (arr[i] === arr[i+1]){
    counter++
  }
  else{
     
    result += counter + arr[i]
    counter = 1
    
  }
  }
  console.log(result)
  return result.replace(/1/g, '')
  
}

module.exports = {
  encodeLine
};
