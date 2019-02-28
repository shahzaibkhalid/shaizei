const parserOptions = {
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
};

module.exports = parserOptions;
