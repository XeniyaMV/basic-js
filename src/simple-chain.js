const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  _chainContainer: [],
  getLength() {
    return this._chainContainer.length;
  },
  addLink( value ) {
    this._chainContainer.push(`( ${value} )`);
    return this;
  },
  removeLink( position ) {
    if ((typeof position) != 'number') {
      this._chainContainer = [];
      throw new Error ("You can\'t remove incorrect link!");
    }
    if (position - Math.floor(position) != 0) {
      this._chainContainer = [];
      throw new Error ("You can\'t remove incorrect link!");
    }
    if ((position - 1  < 0) || (position - 1 >= this.getLength())) {
      this._chainContainer = [];
      throw new Error ("You can\'t remove incorrect link!");
    }

    this._chainContainer.splice(position - 1, 1);
    return this;

  },
  reverseChain() {
    this._chainContainer = this._chainContainer.reverse();
    return this;
  },
  finishChain() {
    let res = this._chainContainer.join('~~');
    this._chainContainer = [];
    return res;
  }
};

module.exports = {
  chainMaker
};

