const typescript = () => [
  require.resolve('@babel/preset-typescript'),
  {
    isTSX: true,
    allExtensions: true
  }
];

module.exports = typescript;
