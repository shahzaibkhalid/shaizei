const fs = require('fs');
const { spawnSync } = require('child_process');
const { resolveCWD } = require('@shaizei/helpers');

const renameClonedRepo = (projectName, starterName, starterURL, spawnOptions) => {
  spawnSync(`git clone ${starterURL}`, spawnOptions);
  fs.renameSync(
    resolveCWD(starterName),
    resolveCWD(projectName)
  );
}

module.exports = renameClonedRepo;
