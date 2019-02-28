const path = require('path');

require('dotenv').config({
  path: path.resolve(process.cwd(), '.env')
});

const isHttps = JSON.parse(process.env.https || false);
const shouldShowOverlay = JSON.parse(process.env.showErrorOverly || true);
const port = process.env.port || 3000;
const host = process.env.host || 'localhost';

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
