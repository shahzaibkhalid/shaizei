#!/usr/bin/env node

require('./utils/validateNodeVersion')();
const {
  entryValidation,
  validateBuildDirExists,
  validateStatsJSONExists
} = require('./utils/validateOpinions');

const program = require('commander');
const chalk = require('chalk');
const createApp = require('./utils/createApp');
const packageJSON = require('./package.json');

program
  .version(packageJSON.version)
  .description('A next-generation CLI to quickly scaffold pre-configured yet on-demand configurable React applications.')
  .usage('[command] [options]')

program
  .command('new <projectName>')
  .alias('n')
  .option('-t|--typescript', 'Create React-TypeScript application.')
  .description('Create new React application.')
  .action((projectName, options) => {
    const prefix = chalk.green('[@shaizei/cli]');
    const jsStarterName = 'shaizei-starter-javascript';
    const tsStarterName = 'shaizei-starter-typescript';
    const jsStarterURL = 'https://github.com/shahzaibkhalid/shaizei-starter-javascript.git';
    const tsStarterURL = 'https://github.com/shahzaibkhalid/shaizei-starter-typescript.git';
    const spawnOptions = { shell: true };
    
    createApp(
      projectName,
      options.typescript,
      jsStarterName,
      tsStarterName,
      jsStarterURL,
      tsStarterURL,
      spawnOptions,
      prefix
    );
  })

program
.command('develop')
.alias('d')
.description('Start development server.')
.action(() => {
  entryValidation();
  console.log(
    '\n' +
    chalk.green('Starting development server...') +
    '\n'
  );
  require('@shaizei/scripts').develop();
})

program
.command('lint')
.alias('l')
.description(`Run linter on 'src' directory.`)
.action(() => {
  entryValidation();
  console.log(
    '\n' +
    chalk.green('Running ESLint...') +
    '\n'
  );
  require('@shaizei/scripts').lint();
});

program
.command('serve')
.alias('s')
.description('Serve production bundle.')
.action(() => {
  entryValidation();
  validateBuildDirExists();
  console.log(
    '\n' +
    chalk.yellow('Serving production bundle...') +
    '\n'
  );
  require('@shaizei/scripts').serve();
});

program
.command('build')
.alias('b')
.description('Build production bundle.')
.action(() => {
  entryValidation();
  console.log(
    '\n' +
    chalk.yellow('Building production bundle...') +
    '\n'
  );
  require('@shaizei/scripts').build();
});

program
.command('analyze')
.alias('a')
.description('Analyze production bundle.')
.action(() => {
  entryValidation();
  validateStatsJSONExists();
  console.log(
    '\n' +
    chalk.yellow('Preparing production bundle and running analyzer...') +
    '\n'
  );
  require('@shaizei/scripts').analyze();
});

program
.command('eslint-prettier-integration')
.alias('epi')
.description('Check integration of ESLint & Prettier.')
.action(() => {
  entryValidation();
  console.log(
    '\n' +
    chalk.yellow('Checking ESLint & Prettier integration....') +
    '\n'
  );
  require('@shaizei/scripts').eslintPrettierIntegration();
});

program
.command('lint-fix')
.alias('lf')
.description('Resolve ESLint fixable issues.')
.action(() => {
  entryValidation();
  console.log(
    '\n' +
    chalk.yellow('Trying to fix common ESLint issuess...') +
    '\n'
  );
  require('@shaizei/scripts').lintFix();
});

program
.command('prettier')
.alias('p')
.description(`Run Prettier on 'src' directory.`)
.action(() => {
  entryValidation();
  console.log(
    '\n' +
    chalk.yellow('Running Prettier...') +
    '\n'
  );
  require('@shaizei/scripts').prettier();
});

program
.command('prettier-fix')
.alias('pf')
.description(`Fix Prettier issues in 'src' directory.`)
.action(() => {
  entryValidation();
  console.log(
    '\n' +
    chalk.yellow('Trying to fix Prettier formatting issuess...') +
    '\n'
  );
  require('@shaizei/scripts').prettierFix();
});

program.on('command:*', function () {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
  process.exit(1);
});

program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
