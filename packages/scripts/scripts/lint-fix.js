const lintFix = () => {
  const spawn = require('cross-spawn');
  const spawnOptions = require('../lib/spawnOptions');
  const { commonIdent } = require('@shaizei/helpers');
  const { src } = commonIdent;

  spawn.sync(
    `./node_modules/@shaizei/eslint-config/node_modules/.bin/eslint --fix --ext .js --ext .jsx --ext .ts --ext .tsx '${src}/'`,
    spawnOptions
  );
};

module.exports = lintFix;
