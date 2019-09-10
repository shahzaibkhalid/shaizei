const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const WebpackBar = require('webpackbar');
const { isCI } = require('ci-info');
const { findConfig,
  configKeys,
  resolveCurrentWorkingDir,
  standardFiles: {
    src, build, indexHTML, assets, faviconICO
  }
} = require('@shaizei/helpers');

const isProduction = process.env.NODE_ENV === 'production';
const shouldUseCSSModules = findConfig(configKeys.cssModules);
const shouldAddCSSSourceMaps = findConfig(configKeys.addCSSSourceMaps);
const conditionalPlugins = [];
const srcDir = resolveCurrentWorkingDir(src);
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
  loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader'
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
    main:  resolveCurrentWorkingDir(src, `index.${findConfig(configKeys.typescript) ? 'tsx' : 'jsx'}`),
  },
  output: {
    path: resolveCurrentWorkingDir(build),
    filename: 'app.bundle.js',
  },
  plugins: [
    ...conditionalPlugins,
    new CaseSensitivePathsPlugin({
      debug: false,
    }),
    new HtmlWebpackPlugin({
      title: findConfig(configKeys.title),
      filename: indexHTML,
      template: resolveCurrentWorkingDir(src, indexHTML),
      favicon: resolveCurrentWorkingDir(src, assets, faviconICO),
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
              modules: shouldUseCSSModules ? {
                localIdentName: '[name]-[hash:base64:5]',
              }: false,
              sourceMap: shouldAddCSSSourceMaps,
              localsConvention: shouldUseCSSModules ? 'camelCase' : 'asIs',
              importLoaders: false,
              onlyLocals: shouldUseCSSModules ? true : false
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
