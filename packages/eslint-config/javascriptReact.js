const eslintConfigForJS = {
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }]
  },
  extends: [
    '@shaizei/eslint-config/utils/commonConfig.js'
  ],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@shaizei/webpack-config/config/webpack.base'),
        extensions: ['.js', '.jsx']
      },
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx']
      }
    }
  }
};

module.exports = eslintConfigForJS;
