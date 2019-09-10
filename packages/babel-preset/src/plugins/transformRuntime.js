const transformRuntime = () => [
  require.resolve('@babel/plugin-transform-runtime'),
  {
    corejs: 3,
    helpers: true,
    regenerator: true,
    useESModule: true,
  }
];

module.exports = transformRuntime;
