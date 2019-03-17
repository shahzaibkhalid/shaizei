const serve = () => {
  const { spawn } = require('child_process');
  spawn(
    "./node_modules/@shaizei/scripts/node_modules/.bin/serve -s build",
    {
      shell: true,
      stdio: 'inherit'
    }
  );
};

module.exports = serve;
