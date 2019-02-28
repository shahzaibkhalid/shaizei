const develop = require('./scripts/develop');
const lint = require('./scripts/lint');
const serve = require('./scripts/serve');
const build = require('./scripts/build');
const analyze = require('./scripts/analyze')

module.exports = {
  lint,
  serve,
  build,
  develop,
  analyze,
};
