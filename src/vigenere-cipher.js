const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(message, key) {
    if (!message || !key){
      throw new Error('Incorrect arguments!')
    }

    else {
      key = key.toUpperCase()
      key = key.split('')
      let mess = message.toUpperCase()
      mess = mess.replace(/\s/g, '')
      mess.split('')
      
      
      while (key.length < mess.length){
        key = key.concat(key)
      }
      let result = []
      
      let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      for (let i = 0; i < mess.length; i++){
        
        if (!mess[i].match(/[A-Z]/i)){
          result.push(mess[i])
        }
        else{
          let x = arr.indexOf(mess[i])
          let y = arr.indexOf(key[i])
          let res = x + y
          if (res <= 25){
            result.push(arr[res])
          }
          else{
            result.push(arr[res - 26])
          }
        }
    }
    
    for (let i = 0; i < message.length; i++){
      if (message[i] == " "){
        result.splice(i, 0, " ")
      }
    }
      return result.join('')
    }
  
   }
  decrypt(encryptedMessage, key) {
   if (!encryptedMessage || !key){
    throw new Error('Incorrect arguments!')
   }
   else{
    key = key.toUpperCase()
    key = key.split('')
    let mess = encryptedMessage.toUpperCase()
    mess = mess.replace(/\s/g, '')
    mess.split('')

    while (key.length < mess.length){
      key = key.concat(key)
    }
    let result = []
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      for (let i = 0; i < mess.length; i++){
        
        if (!mess[i].match(/[A-Z]/i)){
          result.push(mess[i])
        }
        else{
          let x = arr.indexOf(mess[i])
          let y = arr.indexOf(key[i])
          let res = x - y
          if (res >= 0){
            result.push(arr[res])
          }
          else{
            result.push(arr[26 - Math.abs(res)])
          }
        }
    }
    
    for (let i = 0; i < encryptedMessage.length; i++){
      if (encryptedMessage[i] == " "){
        result.splice(i, 0, " ")
      }
    }
      return result.join('')
   }

  }
}

module.exports = {
  VigenereCipheringMachine
};
