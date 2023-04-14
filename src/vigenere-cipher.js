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
  constructor(method) {
    this.method = ((method === undefined) || (method == true)) ? true : false;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }
  
  _getKeyWord(str, key) {
    let keyWord = '';
    let keyIndx = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.alphabet.includes(str[i].toUpperCase())) {
        keyWord += key[keyIndx];
        keyIndx++;
        if (keyIndx == key.length) {
          keyIndx = 0;
        }
      }
      else {
        keyWord += str[i];
      }
    }
    return keyWord;
  }
  
  encrypt(str, key) {

    if (str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let encryptedStr = '';
    let keyWord = this._getKeyWord(str, key).toUpperCase();
    str = str.toUpperCase();

    for (let i = 0; i < str.length; i++) {
      let c = '';
      if (this.alphabet.indexOf(str[i]) != -1) {
        c = this.alphabet[(this.alphabet.indexOf(str[i]) + this.alphabet.indexOf(keyWord[i])) % 26];
      }
      else {
        c = str[i];
      }
      encryptedStr += c;
    }

    if (!this.method) {
      encryptedStr = encryptedStr.split('').reverse().join('');
    }

    return encryptedStr;
  }
  
  
  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let decryptedStr = '';
    let keyWord = this._getKeyWord(str, key).toUpperCase();
    str = str.toUpperCase();

    for (let i = 0; i < str.length; i++) {
      let c = '';
      if (this.alphabet.includes(str[i])) {
        let k = Math.floor((this.alphabet.indexOf(str[i]) - this.alphabet.indexOf(keyWord[i])) / 26);
        c = this.alphabet[(this.alphabet.indexOf(str[i]) - this.alphabet.indexOf(keyWord[i])) - 26 * k];
      }
      else {
        c = str[i];
      }
      decryptedStr += c;
    }

    if (!this.method) {
      decryptedStr = decryptedStr.split('').reverse().join('');
    }
    return decryptedStr;
  }
}

module.exports = {
  VigenereCipheringMachine
};

// const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'));
// console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));