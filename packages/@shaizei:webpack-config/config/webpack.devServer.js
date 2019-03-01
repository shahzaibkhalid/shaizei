const path = require('path');
const loadJSONFIle = require('load-json-file');

const shaizeiConfig = loadJSONFIle.sync(path.resolve(process.cwd(), 'shaizeirc.json'));
// require('dotenv').config({
//   path: path.resolve(process.cwd(), '.env')
// });

const isHttps = shaizeiConfig.hasOwnProperty('https') ? shaizeiConfig.https : false;
const shouldShowOverlay = shaizeiConfig.hasOwnProperty('showErrorOverly') ? shaizeiConfig.showErrorOverly : true;
const port = shaizeiConfig.hasOwnProperty('port') ? shaizeiConfig.port : 3000;
const host = shaizeiConfig.hasOwnProperty('host') ? shaizeiConfig.host : 'localhost';

const overlayConfig = {
  warnings: true,
  errors: true,
};

const serverConfig = {
  open: true,
  watchContentBase: true,
  clientLogLevel: 'none',
  hot: true,
  publicPath: '/',
  compress: true,
  overlay: shouldShowOverlay ? overlayConfig : false,
  host,
  port,
  https: isHttps,
  historyApiFallback: {
    disableDotRule: true,
  },
  stats: 'minimal'
};

module.exports = serverConfig;
