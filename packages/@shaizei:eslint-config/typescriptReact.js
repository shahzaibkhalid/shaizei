const eslintConfigForTS = {
  parserOptions: {
    useJSXTextNode: true,
    warnOnUnsupportedTypeScriptVersion: true
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    '@shaizei/eslint-config/utils/commonConfig.js'
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
};

module.exports = eslintConfigForTS;
