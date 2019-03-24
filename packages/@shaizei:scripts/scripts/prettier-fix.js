const prettierFix = () => {
  const spawn = require('cross-spawn');

  spawn.sync(
    "./node_modules/@shaizei/prettier-config/node_modules/.bin/prettier --write './src/**/*.{js,jsx,ts,tsx}'",
    {
      shell: true,
      stdio: "inherit"
    }
  );
};

module.exports = prettierFix;
