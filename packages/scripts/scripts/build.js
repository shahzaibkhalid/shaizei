const build = () => {
  const { sync } = require('cross-spawn');
  const spawnOptions = require('../lib/spawnOptions');

  process.env.NODE_ENV = 'production';
  process.env.BABEL_ENV = 'production';

  sync(
    './node_modules/@shaizei/webpack-config/node_modules/.bin/webpack --env=production --hide-modules',
    spawnOptions
  );
};

module.exports = build;
