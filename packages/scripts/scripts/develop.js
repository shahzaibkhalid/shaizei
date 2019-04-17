const develop = () => {
  const spawn = require('cross-spawn');
  const spawnOptions = require('../lib/spawnOptions');

  process.env.NODE_ENV = 'development';
  process.env.BABEL_ENV = 'development';

  spawn.sync(
    './node_modules/.bin/webpack-dev-server --hot --inline',
    spawnOptions
  );
};

module.exports = develop;
