const lintFix = () => {
  const { spawn } = require("child_process");

  spawn(
    "./node_modules/@shaizei/eslint-config/node_modules/.bin/eslint --fix --ext .js --ext .jsx --ext .ts --ext .tsx 'src/'",
    {
      shell: true,
      stdio: "inherit"
    }
  );
};

module.exports = lintFix;
