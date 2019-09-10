const develop = () => {
  const { sync } = require('cross-spawn');
  const spawnOptions = require('../lib/spawnOptions');

  process.env.NODE_ENV = 'development';
  process.env.BABEL_ENV = 'development';

  sync(
    './node_modules/.bin/webpack-dev-server --hot --inline',
    spawnOptions
  );
};

module.exports = develop;
