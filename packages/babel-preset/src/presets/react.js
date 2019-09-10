const react = (env) => [
  require.resolve('@babel/preset-react'),
  {
    development: env === 'development' ? true : false,
  },
];

module.exports = react;
