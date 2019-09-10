const classProperties = () => [
  require.resolve('@babel/plugin-proposal-class-properties'),
  {
    loose: false,
  },
];

module.exports = classProperties;
