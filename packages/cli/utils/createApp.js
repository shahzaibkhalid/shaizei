const fs = require('fs');
const del = require('del');
const { spawnSync } = require('child_process');
const chalk = require('chalk');
const { resolveCWD } = require('@shaizei/helpers');
const renameClonedRepo = require('./renameClonedRepo');

const createApp = (projectName ,isTypeScript, jsStarterName, tsStarterName, jsStarterURL, tsStarterURL, spawnOptions, prefix) => {
  console.log(prefix, chalk.magenta(`Creating new ${chalk.blue(projectName)}${isTypeScript ? ' TypeScript' : ''} application...`));
  if (isTypeScript) {
    renameClonedRepo(projectName, tsStarterName, tsStarterURL, spawnOptions);
  } else {
    renameClonedRepo(projectName, jsStarterName, jsStarterURL, spawnOptions);
  }
  del.sync(
    resolveCWD(projectName, '.git')
  );
  const pathToPackageJSON = resolveCWD(projectName, 'package.json');
  const packageJSON = JSON.parse(fs.readFileSync(pathToPackageJSON));
  packageJSON.name = projectName;
  delete packageJSON.description;
  delete packageJSON.author;
  fs.writeFileSync(
    pathToPackageJSON,
    JSON.stringify(packageJSON, null, 2)
  );
  process.chdir(projectName);
  
  console.log(prefix, chalk.magenta('Installing dependencies...'));
  spawnSync('yarn install', {...spawnOptions, stdio: 'inherit'});

  console.log(prefix, chalk.magenta('Initializing Git repository...'));
  spawnSync('git init', spawnOptions);
  spawnSync('git add .', {...spawnOptions, stdio: 'inherit'});
  spawnSync('git commit -am "Initial commit by @shaizei/cli"', {...spawnOptions, stdio: 'inherit'});

  console.log(prefix, chalk.magenta(`Project created! Please checkout ${chalk.blue('README.md')} for all the available commands.`));
  console.log(prefix, chalk.magenta(`Happy Hacking!`));
}

module.exports = createApp;
