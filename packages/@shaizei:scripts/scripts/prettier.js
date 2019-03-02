const prettier = () => {
  const { spawn } = require("child_process");

  spawn(
    "./node_modules/@shaizei/prettier-config/node_modules/.bin/prettier --check 'src/**/*.{js,jsx,ts,tsx}'",
    {
      shell: true,
      stdio: "inherit"
    }
  );
};

module.exports = prettier;
