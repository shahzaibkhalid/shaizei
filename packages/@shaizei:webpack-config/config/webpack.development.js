const path = require('path');

require('dotenv').config({
  path: path.resolve(process.cwd(), '.env')
});

const devServerConfig = require('./webpack.devServer.js');

const checkLintingEveryCompilation = JSON.parse(process.env.checkLintingEveryCompilation);

const webpackDevConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: devServerConfig,
  module: {
    rules: [
      checkLintingEveryCompilation ? {
        enforce: 'pre',
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: [/(node_modules|bower_components)/],
        use: [
          {
            loader: require.resolve('eslint-loader'),
            options: {
              cache: true,
              eslintPath: require.resolve('eslint'),
              emitError: true,
              emitWarning: true,
              failOnError: true,
              failOnWarning: true
            },
          },
        ]
      } : {},
      {
        test: /\.(tsx|ts|js|jsx)$/,
        include: [/node_modules/],
        use: [
          {
            loader: 'react-hot-loader/webpack'
          }
        ]
      }
    ],
  },
};

module.exports = webpackDevConfig;
