const merge = require('webpack-merge');
const webpackBaseConfig = require('./config/webpack.base.js');
const webpackDevConfig = require('./config/webpack.development.js');
const webpackProdConfig = require('./config/webpack.production.js');

module.exports = (options = {}) => env => {
  const isProduction = env === 'production';
  const environmentConfig = isProduction ? webpackProdConfig : webpackDevConfig;

  const config = merge(
    webpackBaseConfig,
    environmentConfig,
    options
  )
  return config;
};
