const develop = require('./scripts/develop');
const lint = require('./scripts/lint');
const serve = require('./scripts/serve');
const build = require('./scripts/build');
const analyze = require('./scripts/analyze');
const eslintPrettierIntegration = require('./scripts/eslint-prettier-integration');
const prettier = require('./scripts/prettier');
const lintFix = require('./scripts/lint-fix');
const prettierFix = require('./scripts/prettier-fix');

module.exports = {
  lint,
  serve,
  build,
  develop,
  analyze,
  eslintPrettierIntegration,
  prettier,
  lintFix,
  prettierFix
};
