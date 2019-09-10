const transformReactRemovePropTypes = () => [
  require.resolve('babel-plugin-transform-react-remove-prop-types'),
  {
    mode: 'remove',
    removeImport: true,
    ignoreFileNames: ['node_modules'],
  },
];

module.exports = transformReactRemovePropTypes;
