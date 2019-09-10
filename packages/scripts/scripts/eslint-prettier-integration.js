const eslintPrettierIntegration = () => {
  const { sync } = require('cross-spawn');
  const spawnOptions = require('../lib/spawnOptions');

  sync(
    './node_modules/@shaizei/eslint-config/node_modules/.bin/eslint --print-config ./index | ./node_modules/@shaizei/eslint-config/node_modules/.bin/eslint-config-prettier-check',
    spawnOptions
  );
};

module.exports = eslintPrettierIntegration;
