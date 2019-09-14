const prettier = () => {
  const { sync } = require('cross-spawn');
  const { standardFiles: { src } } = require('@shaizei/helpers');
  const spawnOptions = require('../lib/spawnOptions');

  const childProcess = sync(
    `./node_modules/@shaizei/prettier-config/node_modules/.bin/prettier --check '${src}/**/*.{js,jsx,ts,tsx}'`,
    spawnOptions
  );

  if (childProcess.status === 1) process.exit(1);
};

module.exports = prettier;
