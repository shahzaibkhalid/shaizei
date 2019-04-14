const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { readShaizeiConfig, shaizeiConfigProps } = require('@shaizei/helpers');
const devServerConfig = require('./webpack.devServer.js');

const conditionalPlugins = [];

if (
    readShaizeiConfig(shaizeiConfigProps.typescript) &&
    readShaizeiConfig(shaizeiConfigProps.typeCheck)
  ) {
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
  devtool: readShaizeiConfig(shaizeiConfigProps.webpackDevSourceMap),
  devServer: devServerConfig,
  plugins: [
    ...conditionalPlugins,
  ],
  module: {
    rules: [
      readShaizeiConfig(shaizeiConfigProps.emitLintingErrors) ? {
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
