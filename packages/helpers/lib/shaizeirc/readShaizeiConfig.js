const loadJSONFIle = require('load-json-file');
const defaultShaizeiConfig = require('./defaultshaizeiConfig');
const resolveCWD = require('../path/resolveCWD');
const { shaizeiRC } = require('../commonIdent');

const readShaizeiConfig = property => {
  const pathToShaizeiConfig = resolveCWD(shaizeiRC);
  const shaizeiConfig = loadJSONFIle.sync(pathToShaizeiConfig);
  return shaizeiConfig.hasOwnProperty(property)
    ? shaizeiConfig[property]
    : defaultShaizeiConfig[property];
};

module.exports = readShaizeiConfig;
