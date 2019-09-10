const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { isCI } = require('ci-info');
const {
  findConfig,
  configKeys, resolveCurrentWorkingDir,
  standardFiles: { stats, report, statsJSON, src }
} = require('@shaizei/helpers');

const shouldAddJSSourceMaps = findConfig(configKeys.addJSSourceMaps);
const conditionalPlugins = [];

if (!isCI) {
  conditionalPlugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
      reportFilename: `${stats}/${report}`,
      statsFilename: `${stats}/${statsJSON}`,
      openAnalyzer: false,
    })
  );
}

const webpackProdConfig = {
  mode: 'production',
  bail: true,
  devtool: shouldAddJSSourceMaps ? findConfig(configKeys.webpackProdSourceMap) : false,
  entry: resolveCurrentWorkingDir(src, `index.${findConfig(configKeys.typescript) ? 'tsx' : 'jsx'}`),
  output: {
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: '/'
  },
  plugins: [
    ...conditionalPlugins,
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new CleanWebpackPlugin({
      root: resolveCurrentWorkingDir(),
      allowExternal: false,
      dry: false,
      watch: false,
      verbose: false,
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
        sourceMap: shouldAddJSSourceMaps
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          map: findConfig(configKeys.addCSSSourceMaps) ? {
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
