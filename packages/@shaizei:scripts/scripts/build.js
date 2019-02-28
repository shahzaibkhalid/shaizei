const build = () => {
  const { spawn } = require('child_process');
  
  process.env.NODE_ENV = 'production';
  process.env.BABEL_ENV = 'production';

  spawn(
    "./node_modules/@shaizei/webpack-config/node_modules/.bin/webpack --env=production --hide-modules",
    {
      shell: true,
      stdio: 'inherit'
    }
  );
};

module.exports = build;
