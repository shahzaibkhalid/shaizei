const loadJSONFIle = require('load-json-file');
const defaultConfig = require('./defaultConfig');
const resolveCurrentWorkingDir = require('../path/resolveCurrentWorkingDir');
const { shaizeiRC } = require('../standardFiles');

const findConfig = (property) => {
  const pathToShaizeiConfig = resolveCurrentWorkingDir(shaizeiRC);
  const shaizeiConfig = loadJSONFIle.sync(pathToShaizeiConfig);
  return shaizeiConfig.hasOwnProperty(property)
    ? shaizeiConfig[property]
    : defaultConfig[property];
};

module.exports = findConfig;
