const checkType = () => {
  const spawn = require('cross-spawn');
  const spawnOptions = require('../lib/spawnOptions');
  spawn.sync('tsc' ,spawnOptions);
};

module.exports = checkType;
