const analyze = () => {
  const spawn = require('cross-spawn');
  const { commonIdent } = require('@shaizei/helpers');
  const spawnOptions = require('../lib/spawnOptions');
  const { stats, build, statsJSON } = commonIdent;
  
  spawn.sync(
    `./node_modules/@shaizei/webpack-config/node_modules/.bin/webpack-bundle-analyzer ${build}/${stats}/${statsJSON} ${build}`,
    spawnOptions
  );
};

module.exports = analyze;
