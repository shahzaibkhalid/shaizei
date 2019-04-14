const path = require('path');
const loadJSONFIle = require('load-json-file');
const defaultShaizeiConfig = require('./defaultshaizeiConfig');


const readShaizeiConfig = property => {
  const pathToShaizeiConfig = path.resolve(process.cwd(), 'shaizeirc.json');
  const shaizeiConfig = loadJSONFIle.sync(pathToShaizeiConfig);
  return shaizeiConfig.hasOwnProperty(property)
    ? shaizeiConfig[property]
    : defaultShaizeiConfig[property];
};

module.exports = readShaizeiConfig;
