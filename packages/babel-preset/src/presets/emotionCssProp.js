const emotionCssProp = (env) => [
  require.resolve('@emotion/babel-preset-css-prop'),
  {
    sourceMap: true,
    autoLabel: env === 'development',
    labelFormat: '[local]',
    cssPropOptimization: true,
  }
];

module.exports = emotionCssProp;
