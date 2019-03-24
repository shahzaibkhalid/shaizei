const analyze = () => {
  const spawn = require('cross-spawn');
  
  spawn.sync(
    "./node_modules/@shaizei/webpack-config/node_modules/.bin/webpack-bundle-analyzer build/stats/stats.json build",
    {
      shell: true,
      stdio: 'inherit'
    }
  );
};

module.exports = analyze;
