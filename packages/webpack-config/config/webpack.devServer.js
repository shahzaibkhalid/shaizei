const { findConfig, configKeys } = require('@shaizei/helpers');
const getFreePort = require('../utils/getFreePort.js');

const defaultPort = findConfig(configKeys.defaultPort);
const overlayConfig = {
  warnings: true,
  errors: true,
};

const freePort = getFreePort(defaultPort);

if (defaultPort !== freePort && process.env.NODE_ENV === 'development') {
  console.log(
    `\nYour preferred default port (${defaultPort}) is already busy, starting development server at ${freePort}.`
  );
}

const serverConfig = {
  open: true,
  clientLogLevel: 'none',
  hot: true,
  publicPath: '/',
  compress: true,
  overlay: findConfig(configKeys.showErrorOverly) ? overlayConfig : false,
  host: findConfig(configKeys.host),
  port: defaultPort === freePort ? defaultPort: freePort,
  https: findConfig(configKeys.https),
  historyApiFallback: {
    disableDotRule: true,
  },
  stats: 'minimal'
};

module.exports = serverConfig;
