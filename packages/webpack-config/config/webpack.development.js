const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { findConfig, configKeys, resolveCurrentWorkingDir } = require('@shaizei/helpers');
const devServerConfig = require('./webpack.devServer.js');

const conditionalPlugins = [];

if (
    findConfig(configKeys.typescript) &&
    findConfig(configKeys.typeCheck)
  ) {
  conditionalPlugins.push(
    new ForkTsCheckerWebpackPlugin({
      tsconfig: resolveCurrentWorkingDir('tsconfig.json'),
      useTypescriptIncrementalApi: true,
      measureCompilationTime: true,
      formatter: 'codeframe',
    })
  )
}

const webpackDevConfig = {
  mode: 'development',
  devtool: findConfig(configKeys.webpackDevSourceMap),
  devServer: devServerConfig,
  plugins: [
    ...conditionalPlugins,
  ],
  module: {
    rules: [
      findConfig(configKeys.emitLintingErrors) ? {
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
