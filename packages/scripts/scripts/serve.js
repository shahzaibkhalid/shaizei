const serve = () => {
  const { sync } = require('cross-spawn');
  const { standardFiles: { build } } = require('@shaizei/helpers');
  const spawnOptions = require('../lib/spawnOptions');

  sync(
    `./node_modules/@shaizei/scripts/node_modules/.bin/serve -s ${build}`,
    spawnOptions
  );
};

module.exports = serve;
