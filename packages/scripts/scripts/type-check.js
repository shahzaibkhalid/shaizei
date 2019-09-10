const checkType = () => {
  const { sync } = require('cross-spawn');
  const spawnOptions = require('../lib/spawnOptions');
  sync('tsc' ,spawnOptions);
};

module.exports = checkType;
