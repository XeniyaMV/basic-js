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
function encodeLine( str ) {
  if (str === '') {
    return '';
  }
  let resStr = '';
  let prevL = str[0];
  let counter = 0;
  for (let l of str) {
    if (l === prevL) {
      counter += 1;
      continue
    }
    if (counter > 1) {
      resStr += counter + prevL;
    }
    else {
      resStr += prevL;
    }
    counter = 1;
    prevL = l;
  }

  if (counter > 1) {
    resStr += counter + prevL;
  }
  else {
    resStr += prevL;
  }
  return resStr;
}

module.exports = {
  encodeLine
};

// console.log(encodeLine('aabbbc'));