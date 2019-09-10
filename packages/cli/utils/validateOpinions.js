const fs = require('fs');
const chalk = require('chalk');
const { findConfig, configKeys, resolveCurrentWorkingDir, standardFiles } = require('@shaizei/helpers');
const { src, indexJSX, indexTSX, indexHTML, assets, faviconICO, shaizeiRC, build, stats, statsJSON } = standardFiles;
const pathToShaizeiConfig = resolveCurrentWorkingDir(shaizeiRC);
const pathToSrcDir = resolveCurrentWorkingDir(src);
const pathToIndexJSX = resolveCurrentWorkingDir(src, indexJSX);
const pathToIndexTSX = resolveCurrentWorkingDir(src, indexTSX);
const pathToIndexHTML = resolveCurrentWorkingDir(src, indexHTML);
const pathToFaviconICO = resolveCurrentWorkingDir(src, assets, faviconICO);
const pathToBuild = resolveCurrentWorkingDir(build);
const pathToStatsJSON = resolveCurrentWorkingDir(build, stats, statsJSON);

validateIfTypeScriptApp = () => {
  if (!findConfig(configKeys.typescript)) {
    console.error(
      chalk.red(
        `Found 'typescript:false' in 'shaizeirc.json'.\nYou can only type-check in a React-TypeScript project.`
      )
    );
    process.exit(1);
  }
};

const validator = (path, errorList) => {
  if (!fs.existsSync(path)) {
    errorList.forEach((err) => {
      console.error(chalk.red(err));
    });
    process.exit(1);
  }
};

const entryValidation = () => {
  const indexJSXTSXErrors = [
    `Apps scaffolded with '@shaizei/cli' has an opinion about entry file:\n`,
    `1) Entry file should be either 'index.jsx' (JS-React) or 'index.tsx' (TS-React).`,
    `2) Entry file should live at the root of 'src' directory.`
  ];

  validator(pathToShaizeiConfig, [
    `\nError: Unable to find 'shaizeirc.json'.`,
    `Please note that a valid 'shaizeirc.json' file need to exist at the root of the project.`
  ]);
  validator(pathToSrcDir, [
    `Error: Unable to find a 'src' directory.`,
    `Apps scaffolded with '@shaizei/cli' has an opinion about 'src' directory:\n`,
    `Please note that their must be a 'src' directory at the root of the project directory containing application-specific code.`
  ]);

  if (findConfig(configKeys.typescript)) {
    validator(pathToIndexTSX, [
      `Error: Unable to find 'index.tsx'`,
      ...indexJSXTSXErrors
    ]);
  } else {
    validator(pathToIndexJSX, [
      `Error: Unable to find 'index.jsx'`,
      ...indexJSXTSXErrors
    ]);
  }
  validator(pathToIndexHTML, [
    `Error: Unable to find 'index.html'`,
    `Apps scaffolded with '@shaizei/cli' has an opinion about 'index.html' file:\n`,
    `1) 'index.html' must live at the root of 'src' directory.`
  ]);
  validator(pathToFaviconICO, [
    `Error: Unable to find 'favicon.ico'`,
    `Apps scaffolded with '@shaizei/cli' has an opinion about 'favicon.ico' file:\n`,
    `1) 'favicon.ico' must live at the root of 'assets' directory.`,
    `2) 'assets' directory must live at the root of 'src' directory.`
  ]);
};

const validateBuildDirExists = () => {
  validator(pathToBuild, [
    `Error: Unable to find 'build'\n`,
    `Please run 'shaizei build' to generate an optimized production bundle.`
  ]);
};

const validateStatsJSONExists = () => {
  validator(pathToStatsJSON, [
    `Error: Unable to find 'stats.json'`,
    `Please run 'shaizei build' to generate an optimized production bundle that will also generate 'stats.json'.`
  ]);
};

module.exports = {
  entryValidation,
  validateBuildDirExists,
  validateStatsJSONExists,
  validateIfTypeScriptApp
};
