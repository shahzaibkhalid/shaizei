const detectPort = require('detect-port');
const deasync = require('deasync');

module.exports = (port) => {
  let isDone = false;
  let freeport = null;
  let error = null;

  detectPort(port)
    .then(availablePort => {
      isDone = true;
      freeport = availablePort;
    }).catch(err => {
      isDone = true;
      error = err;
    })
  
    deasync.loopWhile(() => !isDone);

    if (error) {
      throw err;
    }
    
    return freeport;
}
