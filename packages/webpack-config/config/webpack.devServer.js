const { readShaizeiConfig, shaizeiConfigProps } = require('@shaizei/helpers');
const getFreePort = require('../utils/getFreePort.js');

const defaultPort = readShaizeiConfig(shaizeiConfigProps.defaultPort);
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
  overlay: readShaizeiConfig(shaizeiConfigProps.showErrorOverly) ? overlayConfig : false,
  host: readShaizeiConfig(shaizeiConfigProps.host),
  port: defaultPort === freePort ? defaultPort: freePort,
  https: readShaizeiConfig(shaizeiConfigProps.https),
  historyApiFallback: {
    disableDotRule: true,
  },
  stats: 'minimal'
};

module.exports = serverConfig;
