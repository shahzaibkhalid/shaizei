const lint = () => {
  const spawn = require('cross-spawn');
  const { commonIdent } = require('@shaizei/helpers');
  const spawnOptions = require('../lib/spawnOptions');
  const { src } = commonIdent;

  spawn.sync(
    `./node_modules/@shaizei/eslint-config/node_modules/.bin/eslint --ext .js --ext .jsx --ext .ts --ext .tsx '${src}/'`,
    spawnOptions
  );
};

module.exports = lint;
