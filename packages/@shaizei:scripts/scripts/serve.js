const serve = () => {
  const { spawn } = require('child_process');
  const serveChild  = spawn(
    "./node_modules/@shaizei/scripts/node_modules/.bin/serve -s build",
    {
      shell: true,
      stdio: 'inherit'
    }
  );
  
  serveChild.on('message', (message) => {
    process.stdout.write(message);
  });
  
  serveChild.on('error', (err) => {
    console.log(`Process exited with error ${err.name}`);
  })
  
  serveChild.on('exit', (code) => {
    console.log(`Process exited with ${code}`);
  });
};

module.exports = serve;
