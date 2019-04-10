const path = require('path');
const loadJSONFIle = require('load-json-file');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const WebpackBar = require('webpackbar');
const { isCI } = require('ci-info');

const shaizeiConfig = loadJSONFIle.sync(path.resolve(process.cwd(), 'shaizeirc.json'));

const isProduction = process.env.NODE_ENV === 'production';
const isTypeScript = shaizeiConfig.hasOwnProperty('typescript') ? shaizeiConfig.typescript : false;
const shouldUseCSSModules = shaizeiConfig.hasOwnProperty('cssModules') ? shaizeiConfig.cssModules : false;
const shouldAddCSSSourceMaps = shaizeiConfig.hasOwnProperty('addCSSSourceMaps') ? shaizeiConfig.addCSSSourceMaps : true;
const conditionalPlugins = [];
const fileHandlingLoaders = [
  {
    loader: 'file-loader',
  }
];
const primaryJSTSxLoaders = [
  {
    loader: require.resolve('babel-loader'),
    options: {
      cacheDirectory: true,
      cacheCompression: true,
      cacheIdentifier: process.env.NODE_ENV,
    },
  }
];

const styleLoader = {
  loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
  options: isProduction ? {} : {
    hmr: true,
    attrs: {},
    insertAt: 'top',
    singleton: true,
    sourceMap: shouldAddCSSSourceMaps,
    convertToAbsoluteUrls: shouldAddCSSSourceMaps,
  },
};

if (isProduction) {
  fileHandlingLoaders.push({
    loader: 'image-webpack-loader'
  });
}

if (!isCI) {
  conditionalPlugins.push(new WebpackBar());
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
    ...conditionalPlugins,
    new CaseSensitivePathsPlugin({
      debug: false,
    }),
    new HtmlWebpackPlugin({
      title: shaizeiConfig.hasOwnProperty('title') ? shaizeiConfig.title : 'React App | Shaizei',
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
        use: primaryJSTSxLoaders
      },
      {
        test: /\.css$/,
        use: [
          styleLoader,
          {
            loader: 'css-loader',
            options: {
              url: true,
              import: true,
              modules: shouldUseCSSModules,
              localIdentName: '[name]-[hash:base64:5]',
              sourceMap: shouldAddCSSSourceMaps,
              camelCase: shouldUseCSSModules,
              importLoaders: false,
              exportOnlyLocals: false,
            },
          },
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          styleLoader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: shouldAddCSSSourceMaps,
            }
          }
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
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.css$/, /\.scss$/],
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
      '.json',
      '.wasm',
      '.ico',
      '.svg',
      '.ttf',
      '.css',
      '.scss',
      '.sass',
      '.png',
      '.jpg',
      '.jpeg'
    ],
    alias: {
      src: path.resolve(process.cwd(), 'src')
    },
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
    plugins: [new DirectoryNamedWebpackPlugin({
      honorIndex: true,
      include: path.resolve(process.cwd(), 'src')
    })],
  },
};

module.exports = baseConfig;
