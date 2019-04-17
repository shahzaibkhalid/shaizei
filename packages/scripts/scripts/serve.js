const serve = () => {
  const spawn = require('cross-spawn');
  const { commonIdent } = require('@shaizei/helpers');
  const spawnOptions = require('../lib/spawnOptions');
  const { build } = commonIdent;
  
  spawn.sync(
    `./node_modules/@shaizei/scripts/node_modules/.bin/serve -s ${build}`,
    spawnOptions
  );
};

module.exports = serve;
