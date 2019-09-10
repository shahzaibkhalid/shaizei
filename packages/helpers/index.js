const findConfig = require('./lib/shaizeirc/findConfig');
const configKeys = require('./lib/shaizeirc/configKeys');
const resolveCurrentWorkingDir = require('./lib/path/resolveCurrentWorkingDir');
const standardFiles = require('./lib/standardFiles');

module.exports = {
  findConfig,
  configKeys,
  resolveCurrentWorkingDir,
  standardFiles,
};
