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
function repeater( str, options ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let resString = '';
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = (options.hasOwnProperty('addition')) ? options.addition : '';
  let additionSeparator = options.additionSeparator || '|';
  if (addition !== '') {
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    addition = (addition+additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  }
  resString = (str + addition + separator).repeat(repeatTimes - 1) + str + addition;
  return resString;

}

module.exports = {
  repeater
};

// console.log();
// let a = 'str' || 0;
// console.log(a);
//let obj = { repeatTimes: 3 };
//console.log(obj?.separator)
// console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }));