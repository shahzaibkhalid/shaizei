const fs = require('fs');
const { spawnSync } = require('child_process');
const { resolveCurrentWorkingDir } = require('@shaizei/helpers');

const renameClonedRepo = (projectName, starterName, starterURL, spawnOptions) => {
  spawnSync(`git clone ${starterURL}`, spawnOptions);
  fs.renameSync(
    resolveCurrentWorkingDir(starterName),
    resolveCurrentWorkingDir(projectName)
  );
}

module.exports = renameClonedRepo;
