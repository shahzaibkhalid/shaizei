const eslintPrettierIntegration = () => {
  const spawn = require('cross-spawn');

  spawn.sync(
    "./node_modules/@shaizei/eslint-config/node_modules/.bin/eslint --print-config . | ./node_modules/@shaizei/eslint-config/node_modules/.bin/eslint-config-prettier-check",
    {
      shell: true,
      stdio: "inherit"
    }
  );
};

module.exports = eslintPrettierIntegration;
