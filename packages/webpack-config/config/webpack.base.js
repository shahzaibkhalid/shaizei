const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const WebpackBar = require('webpackbar');
const { isCI } = require('ci-info');
const { readShaizeiConfig, shaizeiConfigProps, resolveCWD, commonIdent } = require('@shaizei/helpers');

const isProduction = process.env.NODE_ENV === 'production';
const shouldUseCSSModules = readShaizeiConfig(shaizeiConfigProps.cssModules);
const shouldAddCSSSourceMaps = readShaizeiConfig(shaizeiConfigProps.addCSSSourceMaps);
const conditionalPlugins = [];
const srcDir = resolveCWD(commonIdent.src);
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
  context: srcDir,
  entry: {
    main:  resolveCWD(commonIdent.src, `index.${readShaizeiConfig(shaizeiConfigProps.typescript) ? 'tsx' : 'jsx'}`),
  },
  output: {
    path: resolveCWD(commonIdent.build),
    filename: 'app.bundle.js',
  },
  plugins: [
    ...conditionalPlugins,
    new CaseSensitivePathsPlugin({
      debug: false,
    }),
    new HtmlWebpackPlugin({
      title: readShaizeiConfig(shaizeiConfigProps.title),
      filename: commonIdent.indexHTML,
      template: resolveCWD(commonIdent.src, commonIdent.indexHTML),
      favicon: resolveCWD(commonIdent.src, commonIdent.assets, commonIdent.faviconICO),
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
      src: srcDir,
    },
    modules: [srcDir, 'node_modules'],
    plugins: [new DirectoryNamedWebpackPlugin({
      honorIndex: true,
      include: srcDir
    })],
  },
};

module.exports = baseConfig;
