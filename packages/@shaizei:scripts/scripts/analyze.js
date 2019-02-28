const analyze = () => {
  const { spawn } = require('child_process');
  // 'webpack --env production --profile --json > webpack-stats.json && webpack-bundle-analyzer webpack-stats.json build'
  spawn(
    // "./node_modules/@shaizei/webpack-config/node_modules/.bin/webpack --env=production --profile --json > bundle-stats.json && ./node_modules/@shaizei/webpack-config/node_modules/.bin/webpack-bundle-analyzer bundle-stats.json build",
    "./node_modules/@shaizei/webpack-config/node_modules/.bin/webpack-bundle-analyzer build/stats/stats.json build",
    {
      shell: true,
      stdio: 'inherit'
    }
  );
};

module.exports = analyze;
