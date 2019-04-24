const extensions = { extensions: ['.jsx', '.js'] };

const eslintConfigForJS = {
  rules: {
    'react/jsx-filename-extension': [1, ...extensions]
  },
  extends: [
    '@shaizei/eslint-config/utils/commonConfig.js'
  ],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@shaizei/webpack-config/config/webpack.base'),
        ...extensions
      },
      node: {
        paths: ['src'],
        ...extensions
      }
    }
  }
};

module.exports = eslintConfigForJS;
