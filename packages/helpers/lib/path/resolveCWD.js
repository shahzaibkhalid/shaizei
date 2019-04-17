const path = require('path');

const resolveCWD = (...pathsArr) => path.resolve(process.cwd(), ...pathsArr);
module.exports = resolveCWD;
