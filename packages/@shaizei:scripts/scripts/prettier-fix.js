const prettierFix = () => {
  const { spawn } = require("child_process");

  spawn(
    "./node_modules/@shaizei/prettier-config/node_modules/.bin/prettier --write './src/**/*.{js,jsx,ts,tsx}'",
    {
      shell: true,
      stdio: "inherit"
    }
  );
};

module.exports = prettierFix;
