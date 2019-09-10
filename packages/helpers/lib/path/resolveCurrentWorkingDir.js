const path = require('path');

const resolveCurrentWorkingDir = (...pathsArr) => path.resolve(process.cwd(), ...pathsArr);
module.exports = resolveCurrentWorkingDir;
