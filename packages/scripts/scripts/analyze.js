const analyze = () => {
  const { sync } = require('cross-spawn');
  const { standardFiles: { stats, build, statsJSON } } = require('@shaizei/helpers');
  const spawnOptions = require('../lib/spawnOptions');

  sync(
    `./node_modules/@shaizei/webpack-config/node_modules/.bin/webpack-bundle-analyzer ${build}/${stats}/${statsJSON} ${build}`,
    spawnOptions
  );
};

module.exports = analyze;
