const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //console.log(members);
  if (!Array.isArray(members)) {
    return false;
  }
 
  let teamName = [];
  for (let name of members) {
    if ((typeof name) != 'string') {
      continue;
    }
    teamName.push(name.replaceAll(' ', '')[0].toUpperCase());
  }
  teamName.sort();
  return teamName.join('');
}

module.exports = {
  createDreamTeam
};

