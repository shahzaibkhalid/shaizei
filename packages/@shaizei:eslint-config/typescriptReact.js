const eslintConfigForTS = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      arrowFunctions: true,
      defaultParams: true,
      spread: true,
      destructuring: true,
      classes: true,
      impliedStrict: true,
      jsx: true,
      modules: true,
      templateStrings: true,
      restParams: true,
      objectLiteralShorthandProperties: true,
      objectLiteralComputedProperties: true,
      objectLiteralShorthandMethods: true,
      objectLiteralDuplicateProperties: false,
      forOf: true,
      generators: true,
      globalReturn: false
    },
    useJSXTextNode: true,
    warnOnUnsupportedTypeScriptVersion: true
  },
  env: {
    browser: true,
    node: true,
    serviceworker: true,
    jest: true,
    es6: true
  },
  rules: {
    'emotion/jsx-import': 'error',
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
    'emotion/syntax-preference': [2, 'object'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'jsx-a11y',
    'prettier',
    'promise',
    'emotion',
    'filenames',
    'jest'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
};

module.exports = eslintConfigForTS;
