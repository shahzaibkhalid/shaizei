const prettier = () => {
  const spawn = require('cross-spawn');
  const { commonIdent } = require('@shaizei/helpers');
  const spawnOptions = require('../lib/spawnOptions');
  const { src } = commonIdent;
  
  spawn.sync(
    `./node_modules/@shaizei/prettier-config/node_modules/.bin/prettier --check '${src}/**/*.{js,jsx,ts,tsx}'`,
    spawnOptions
  );
};

module.exports = prettier;
