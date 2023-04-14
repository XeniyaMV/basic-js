const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr ) {
    let depth = 0;
    let max_depth = 0;
    if (!Array.isArray(arr)) {
      console.log("!!!");
      return depth;
    }
    depth += 1;
    max_depth += 1;
    for (let i = 0; i < arr.length; i++) {
        depth += this.calculateDepth(arr[i]);
        max_depth = (depth > max_depth) ? depth: max_depth;
        depth = 1;
    }
    return max_depth;
  }
}

module.exports = {
  DepthCalculator
};

