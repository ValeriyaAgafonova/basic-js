const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  if (Object.keys(options).length === 1){
    str += '+'
    str = str.repeat(options.repeatTimes);
    return str.substring(0, str.length - 1)
    }
    if (Object.keys(options).length === 2){
      let x = `${str}${options.separator}`
      x = x.repeat(options.repeatTimes - 1)
      str = `${x}${str}`
      return str
    }
    else{
      let one = `${options.addition}${options.additionSeparator}`;
      one = one.repeat(options.additionRepeatTimes - 1);
      let f = `${str}${one}${options.addition}`
      one = `${str}${one}${options.addition}${options.separator}`;
      one = one.repeat(options.repeatTimes - 1)
      one = `${one}${f}`
     let m = 'undefined'
      one = one.replace(m, '')
      return one
    }
}

module.exports = {
  repeater
};
