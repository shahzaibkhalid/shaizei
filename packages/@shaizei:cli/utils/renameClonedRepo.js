const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const renameClonedRepo = (projectName, starterName, starterURL, spawnOptions) => {
  spawnSync(`git clone ${starterURL}`, spawnOptions);
  fs.renameSync(
    path.resolve(process.cwd(), starterName),
    path.resolve(process.cwd(), projectName)
  );
}

module.exports = renameClonedRepo;
