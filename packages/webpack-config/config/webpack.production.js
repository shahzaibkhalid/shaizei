const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const loadJSONFIle = require('load-json-file');

const shaizeiConfig = loadJSONFIle.sync(path.resolve(process.cwd(), 'shaizeirc.json'));

const shouldAddJSSourceMaps = shaizeiConfig.hasOwnProperty('addJSSourceMaps') ? shaizeiConfig.addJSSourceMaps : true;
const shouldAddCSSSourceMaps = shaizeiConfig.hasOwnProperty('addCSSSourceMaps') ? shaizeiConfig.addCSSSourceMaps : true;
const isTypeScript = shaizeiConfig.hasOwnProperty('typescript') ? shaizeiConfig.typescript : false;
const prodSourceMap = shaizeiConfig.hasOwnProperty('webpackProdSourceMap') ? shaizeiConfig.webpackProdSourceMap : 'source-map';

const webpackProdConfig = {
  mode: 'production',
  bail: true,
  devtool: shouldAddJSSourceMaps ? prodSourceMap : false,
  entry: path.resolve(process.cwd(), 'src', `index.${isTypeScript ? 'tsx' : 'jsx'}`),
  output: {
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: '/'
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
      reportFilename: 'stats/report.html',
      statsFilename: 'stats/stats.json',
      openAnalyzer: false,
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new CleanWebpackPlugin({
      root: path.resolve(process.cwd()),
      allowExternal: false,
      dry: false,
      watch: false,
      verbose: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].css',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        cache: true,
        parallel: true,
        sourceMap: shouldAddJSSourceMaps
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          map: shouldAddCSSSourceMaps ? {
            inline: false,
            annotation: true
          } : false,
        },
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        },
      }),
    ],
    runtimeChunk: true,
    nodeEnv: 'production',
    minimize: true,
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 200000,
    maxEntrypointSize: 200000,
  }
};

module.exports = webpackProdConfig;
