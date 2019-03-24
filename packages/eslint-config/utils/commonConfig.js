const commonConfig = {
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
    }
  },
  env: {
    browser: true,
    node: true,
    serviceworker: true,
    jest: true,
    es6: true,
  },
  plugins: [
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
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/react'
  ],
  rules: {
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
    'emotion/syntax-preference': [2, 'object'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};

module.exports = commonConfig;
