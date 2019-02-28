#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

program
  .version('1.0.0')
  .description('Create React Apps with tears.')

program
  .command('new <projectName>')
  .alias('n')
  .description('Create new project')
  .action(projectName => {
    console.log('*_*', projectName);
  })

program
.command('develop')
.alias('d')
.description('Start development server')
.action(() => {
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
.description('Lint the code')
.action(() => {
  console.log(
    '\n' +
    chalk.green('Running ESLint...') +
    '\n'
  );
  require('@shaizei/scripts/scripts/lint')()
});

program
.command('serve')
.alias('s')
.description('Serve production bundle.')
.action(() => {
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
  console.log(
    '\n' +
    chalk.yellow('Building production bundle...') +
    '\n'
  );
  require('@shaizei/scripts/scripts/build')();
});

program
.command('analyze')
.alias('a')
.description('Analyze your production bundle.')
.action(() => {
  console.log(
    '\n' +
    chalk.yellow('Preparing production bundle and running analyzer...') +
    '\n'
  );
  require('@shaizei/scripts').analyze();
});

program.parse(process.argv);
