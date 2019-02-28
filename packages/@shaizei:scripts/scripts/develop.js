const develop = () => {
  const { spawn } = require('child_process');
  
  process.env.NODE_ENV = 'development';
  process.env.BABEL_ENV = 'development';

  spawn(
    "./node_modules/.bin/webpack-dev-server --hot --inline",
    {
      shell: true,
      stdio: 'inherit'
    }
  );
};

module.exports = develop;
