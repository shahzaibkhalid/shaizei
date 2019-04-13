const path = require('path');
const loadJSONFIle = require('load-json-file');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const devServerConfig = require('./webpack.devServer.js');

const shaizeiConfig = loadJSONFIle.sync(path.resolve(process.cwd(), 'shaizeirc.json'));

const emitLintingErrors = shaizeiConfig.hasOwnProperty('emitLintingErrors') ? shaizeiConfig.emitLintingErrors : false;
const devSourceMap = shaizeiConfig.hasOwnProperty('webpackDevSourceMap') ? shaizeiConfig.webpackDevSourceMap : 'cheap-module-source-map';
const isTypeScript = shaizeiConfig.hasOwnProperty('typescript') ? shaizeiConfig.typescript : false;
const typeCheck = shaizeiConfig.hasOwnProperty('typeCheck') ? shaizeiConfig.typeCheck : false;

const conditionalPlugins = [];

if (isTypeScript && typeCheck) {
  conditionalPlugins.push(
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(process.cwd(), 'tsconfig.json'),
      useTypescriptIncrementalApi: true,
      measureCompilationTime: true,
      formatter: 'codeframe',
    })
  )
}

const webpackDevConfig = {
  mode: 'development',
  devtool: devSourceMap,
  devServer: devServerConfig,
  plugins: [
    ...conditionalPlugins,
  ],
  module: {
    rules: [
      emitLintingErrors ? {
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
