const prettier = () => {
  const spawn = require('cross-spawn');
  
  spawn.sync(
    "./node_modules/@shaizei/prettier-config/node_modules/.bin/prettier --check 'src/**/*.{js,jsx,ts,tsx}'",
    {
      shell: true,
      stdio: "inherit"
    }
  );
};

module.exports = prettier;
