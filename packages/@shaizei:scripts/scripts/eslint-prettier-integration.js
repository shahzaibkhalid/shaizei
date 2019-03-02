const eslintPrettierIntegration = () => {
  const { spawn } = require("child_process");

  spawn(
    "./node_modules/@shaizei/eslint-config/node_modules/.bin/eslint --print-config . | ./node_modules/@shaizei/eslint-config/node_modules/.bin/eslint-config-prettier-check",
    {
      shell: true,
      stdio: "inherit"
    }
  );
};

module.exports = eslintPrettierIntegration;
