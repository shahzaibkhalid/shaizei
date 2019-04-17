const eslintPrettierIntegration = () => {
  const spawn = require('cross-spawn');
  const spawnOptions = require('../lib/spawnOptions');

  spawn.sync(
    './node_modules/@shaizei/eslint-config/node_modules/.bin/eslint --print-config . | ./node_modules/@shaizei/eslint-config/node_modules/.bin/eslint-config-prettier-check',
    spawnOptions
  );
};

module.exports = eslintPrettierIntegration;
