const lint = () => {
  const { sync } = require('cross-spawn');
  const { standardFiles: { src } } = require('@shaizei/helpers');
  const spawnOptions = require('../lib/spawnOptions');

  const childProcess = sync(
    `./node_modules/@shaizei/eslint-config/node_modules/.bin/eslint --ext .js --ext .jsx --ext .ts --ext .tsx '${src}/'`,
    spawnOptions
  );

  if (childProcess.status === 1) process.exit(1);
};

module.exports = lint;
