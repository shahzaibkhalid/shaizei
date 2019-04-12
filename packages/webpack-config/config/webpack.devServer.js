const path = require('path');
const loadJSONFIle = require('load-json-file');
const getFreePort = require('../utils/getFreePort.js');

const shaizeiConfig = loadJSONFIle.sync(path.resolve(process.cwd(), 'shaizeirc.json'));

const isHttps = shaizeiConfig.hasOwnProperty('https') ? shaizeiConfig.https : false;
const shouldShowOverlay = shaizeiConfig.hasOwnProperty('showErrorOverly') ? shaizeiConfig.showErrorOverly : true;
const defaultPort = shaizeiConfig.hasOwnProperty('defaultPort') ? shaizeiConfig.defaultPort : 3000;
const host = shaizeiConfig.hasOwnProperty('host') ? shaizeiConfig.host : 'localhost';

const overlayConfig = {
  warnings: true,
  errors: true,
};

const freePort = getFreePort(defaultPort);

if (defaultPort !== freePort && process.env.NODE_ENV === 'development') {
  console.log(
    `\nYour preferred default port (${defaultPort}) is already busy, starting server at ${freePort}.`
  );
}

const serverConfig = {
  open: true,
  clientLogLevel: 'none',
  hot: true,
  publicPath: '/',
  compress: true,
  overlay: shouldShowOverlay ? overlayConfig : false,
  host,
  port: defaultPort === freePort ? defaultPort: freePort,
  https: isHttps,
  historyApiFallback: {
    disableDotRule: true,
  },
  stats: 'minimal'
};

module.exports = serverConfig;
