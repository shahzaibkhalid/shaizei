const checkType = () => {
  const { sync } = require('cross-spawn');
  const spawnOptions = require('../lib/spawnOptions');
  const childProcess = sync('tsc' ,spawnOptions);

  if (childProcess.status === 1) process.exit(1);
};

module.exports = checkType;
