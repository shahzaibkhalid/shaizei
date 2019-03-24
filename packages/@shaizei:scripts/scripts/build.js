const build = () => {
  const spawn = require('cross-spawn');
  
  process.env.NODE_ENV = 'production';
  process.env.BABEL_ENV = 'production';

  spawn.sync(
    "./node_modules/@shaizei/webpack-config/node_modules/.bin/webpack --env=production --hide-modules",
    {
      shell: true,
      stdio: 'inherit'
    }
  );
};

module.exports = build;
