const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let max = -Infinity;
  let str = n.toString();
  for (let i = 0; i < str.length; i++){
    let m = +(str.slice(0, i) + str.slice(i+1));
    if (m > max) {
      max = m;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};

console.log(deleteDigit(152));