const checkType = () => {
  const spawn = require('cross-spawn');

  spawn.sync('tsc',
    {
      shell: true,
      stdio: 'inherit'
    }
  )
}

module.exports = checkType;
