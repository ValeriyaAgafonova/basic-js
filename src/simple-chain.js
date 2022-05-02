const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
 arr: [],

  getLength() {
  return this.arr.length
  },

  addLink(value) {
 this.arr.push(`( ${value} )`)
 console.log(this.arr)
 return this
  },

  removeLink(position) {
    
    if (position < 1 || this.arr.length < position || typeof position !== 'number'){
      throw new Error("You can't remove incorrect link!" )
    }
    else{
      this.arr.splice(position - 1, 1)
      return this
    }
    
   
  },

  reverseChain() {
    this.arr.reverse()
    return this
  },

  finishChain() {
    let result = this.arr.join('~~')
    this.arr = []
    return result
  }
};

module.exports = {
  chainMaker
};
