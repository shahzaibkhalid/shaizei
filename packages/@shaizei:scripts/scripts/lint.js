const lint = () => {
  const { spawn } = require("child_process");

  spawn(
    "./node_modules/@shaizei/eslint-config/node_modules/.bin/eslint --ext .js --ext .jsx --ext .ts --ext .tsx 'src/'",
    {
      shell: true,
      stdio: "inherit"
    }
  );
};

module.exports = lint;
