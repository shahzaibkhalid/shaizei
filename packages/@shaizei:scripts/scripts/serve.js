const serve = () => {
  const spawn = require('cross-spawn');
  
  spawn.sync(
    "./node_modules/@shaizei/scripts/node_modules/.bin/serve -s build",
    {
      shell: true,
      stdio: 'inherit'
    }
  );
};

module.exports = serve;
