const lintFix = () => {
  const { sync } = require('cross-spawn');
  const spawnOptions = require('../lib/spawnOptions');
  const { standardFiles: { src } } = require('@shaizei/helpers');

  sync(
    `./node_modules/@shaizei/eslint-config/node_modules/.bin/eslint --fix --ext .js --ext .jsx --ext .ts --ext .tsx '${src}/'`,
    spawnOptions
  );
};

module.exports = lintFix;
