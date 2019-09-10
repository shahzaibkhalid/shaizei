const prettierFix = () => {
  const { sync } = require('cross-spawn');
  const { standardFiles: { src } } = require('@shaizei/helpers');
  const spawnOptions = require('../lib/spawnOptions');

  sync(
    `./node_modules/@shaizei/prettier-config/node_modules/.bin/prettier --write './${src}/**/*.{js,jsx,ts,tsx}'`,
    spawnOptions
  );
};

module.exports = prettierFix;
