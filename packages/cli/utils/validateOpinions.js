/** 
 * There are some rules that must be followed by all the applications created with @shaizei/cli.
 * This file includes validation for all those rules.
*/

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const loadJSONFIle = require('load-json-file');

const pathToShaizeiConfig = path.resolve(process.cwd(), 'shaizeirc.json');
const pathToSrcDir = path.resolve(process.cwd(), 'src');
const pathToIndexJSX = path.resolve(pathToSrcDir, 'index.jsx');
const pathToIndexTSX = path.resolve(pathToSrcDir, 'index.tsx');
const pathToIndexHTML = path.resolve(pathToSrcDir, 'index.html');
const pathToFaviconICO = path.resolve(pathToSrcDir, 'assets', 'favicon.ico');
const pathToBuild = path.resolve(process.cwd(), 'build');
const pathToStatsJSON = path.resolve(pathToBuild, 'stats', 'stats.json');

const shaizeiConfig = loadJSONFIle.sync(pathToShaizeiConfig);
const isTypeScript = shaizeiConfig.hasOwnProperty('typescript') ? shaizeiConfig.typescript : false;

validateIfTypeScriptApp = () => {
  if (!isTypeScript) {
    console.error(chalk.red(`Found 'typescript:false' in 'shaizeirc.json'.\nYou can only type-check in a TypeScript project.`));
    process.exit(1);
  }
}

const validator = (path, errorList) => {
  if (!fs.existsSync(path)) {
    errorList.forEach((err) => {
      console.error(chalk.red(err));
    });
    process.exit(1);
  };
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

  if (isTypeScript) {
    validator(pathToIndexTSX, [
      `Error: Unable to find 'index.tsx'`,
      ...indexJSXTSXErrors
    ])
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
}

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
