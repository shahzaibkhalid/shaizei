const develop = () => {
  const spawn = require('cross-spawn');
  
  process.env.NODE_ENV = 'development';
  process.env.BABEL_ENV = 'development';

  spawn.sync(
    "./node_modules/.bin/webpack-dev-server --hot --inline",
    {
      shell: true,
      stdio: 'inherit'
    }
  );
};

module.exports = develop;
