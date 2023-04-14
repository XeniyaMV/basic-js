const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let resArr = [];
  let flagDiscard = 0;
  let flagDouble = 0;
  let isDeleted = 0;
 
  for (let item of arr) {

    if (flagDiscard == 1) {
      isDeleted = 1;
      flagDiscard = 0;
      continue;
    }

    if (flagDouble == 1) {
      resArr.push(item, item);
      flagDouble = 0;
      continue;
    }

    switch (item) {
      case '--discard-next':
        flagDiscard = 1;
        break;
      case '--discard-prev':
        if (!isDeleted) {
          if (resArr.length != 0) {
            resArr.pop();
          }
        }
        else  {
          isDeleted = 0;
        }
        break;
      case '--double-next':
          flagDouble = 1;
        break;
      case '--double-prev':
        if (!isDeleted) {
          if (resArr.length != 0) {
            resArr.push(resArr[resArr.length - 1]);
          }
        }
        else {
          isDeleted = 0;
        }
        break;
      default:
        resArr.push(item);
    }

  }

  return resArr;
}

module.exports = {
  transform
};


// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));