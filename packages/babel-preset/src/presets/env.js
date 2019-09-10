const env = () => [
  require.resolve('@babel/preset-env'),
  {
    spec: false,
    loose: false,
    modules: false,
    debug: false,
    useBuiltIns: 'usage',
    corejs: 3,
    forceAllTransforms: false,
    configPath: process.cwd(),
    ignoreBrowserslistConfig: false,
    shippedProposals: false,
  }
];

module.exports = env;
