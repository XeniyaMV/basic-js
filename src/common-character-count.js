const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {

  let str = {};

  for(let l of s1) {
    if (str.hasOwnProperty(l)) {
      str[l][0] += 1;
    }
    else {
      str[l] = [1, 0];
    }
  }

  for(let l of s2) {
    if (str.hasOwnProperty(l)) {
      str[l][1] += 1;
    }
    else {
      str[l] = [0, 1];
    }
  }
  let res = Object.values(str).map((item) => Math.min(...item)).reduce((sum, item) => sum + item, 0);
  return res;
}

module.exports = {
  getCommonCharacterCount
};


console.log(getCommonCharacterCount('aabcc', 'adcaa'));