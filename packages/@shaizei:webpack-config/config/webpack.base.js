const path = require('path');

require('dotenv').config({
  path: path.resolve(process.cwd(), '.env')
});

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const WebpackBar = require('webpackbar');

const isProduction = process.env.NODE_ENV === 'production';
const isTypeScript = JSON.parse(process.env.isTypeScript);
const fileHandlingLoaders = [
  {
    loader: 'file-loader',
  }
];

if (isProduction) {
  fileHandlingLoaders.push({
    loader: 'image-webpack-loader'
  });
}

const baseConfig = {
  context: path.resolve(process.cwd(), 'src'),
  entry: {
    main:  path.resolve(process.cwd(), 'src', `index.${isTypeScript ? 'tsx' : 'jsx'}`)
  },
  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: 'app.bundle.js',
  },
  plugins: [
    new CaseSensitivePathsPlugin({
      debug: false,
    }),
    new WebpackBar(),
    new HtmlWebpackPlugin({
      title: process.env.title,
      filename: 'index.html',
      template: path.resolve(process.cwd(), 'src', 'index.html'),
      favicon: path.resolve(process.cwd(), 'src', 'assets', 'favicon.ico'),
      inject: true,
      meta: {},
      minify: isProduction,
      hash: true,
      cache: true,
      showErrors: true,
      xhtml: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: [/(node_modules|bower_components)/],
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
              cacheCompression: true,
              cacheIdentifier: process.env.NODE_ENV,
            },
          },
          isTypeScript ? {
            loader: require.resolve('ts-loader'),
          }: {}
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            options: isProduction ? {} : {
              hmr: true,
              attrs: {},
              insertAt: 'top',
              singleton: true,
              sourceMap: JSON.parse(
                JSON.parse(process.env.addSourceMaps || true),
              ),
              convertToAbsoluteUrls: JSON.parse(
                JSON.parse(process.env.addSourceMaps || true),
              ),
            },
          },
          {
            loader: 'css-loader',
            options: {
              url: true,
              import: true,
              modules: false,
              localIdentName: '[hash:base64]',
              sourceMap: JSON.parse(process.env.addSourceMaps || true),
              camelCase: false,
              importLoaders: false,
              exportOnlyLocals: false,
            },
          },
        ],
      },
      {
        oneOf: [
          {
            test: [/\.png$/, /\.gif$/, /\.bmp$/, /\.jpe?g$/, /\.svg$/],
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 15000,
                  name: 'static/media/[name].[hash:8].[ext]',
                },
              },
            ],
          },
          {
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.css$/],
            use: fileHandlingLoaders
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      'json',
      '.wasm',
      '.ico',
      '.svg',
      '.ttf',
      '.scss',
    ],
    alias: {
      src: path.resolve(process.cwd())
    },
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
    plugins: [new DirectoryNamedWebpackPlugin()],
  },
};

module.exports = baseConfig;
