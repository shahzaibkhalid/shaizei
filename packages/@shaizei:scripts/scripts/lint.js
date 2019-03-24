const lint = () => {
  const spawn = require('cross-spawn');

  spawn.sync(
    "./node_modules/@shaizei/eslint-config/node_modules/.bin/eslint --ext .js --ext .jsx --ext .ts --ext .tsx 'src/'",
    {
      shell: true,
      stdio: "inherit"
    }
  );
};

module.exports = lint;
