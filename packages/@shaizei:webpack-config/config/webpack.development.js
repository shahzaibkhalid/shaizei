const path = require('path');
const loadJSONFIle = require('load-json-file');

const shaizeiConfig = loadJSONFIle.sync(path.resolve(process.cwd(), 'shaizeirc.json'));


const devServerConfig = require('./webpack.devServer.js');

const checkLintingOnEveryCompilation = shaizeiConfig.hasOwnProperty('checkLintingOnEveryCompilation') ? shaizeiConfig.checkLintingOnEveryCompilation : false;

const webpackDevConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: devServerConfig,
  module: {
    rules: [
      checkLintingOnEveryCompilation ? {
        enforce: 'pre',
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: [/(node_modules|bower_components)/],
        use: [
          {
            loader: require.resolve('eslint-loader'),
            options: {
              cache: false,
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
