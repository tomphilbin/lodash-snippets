const { spawn } = require('child_process');

async function getJsdocs() {
  const jsdocCommand = spawn('./node_modules/.bin/jsdoc', [
    './node_modules/lodash/lodash.js',
    '-X',
  ]);

  return new Promise((resolve, reject) => {
    let jsdocs = '';

    jsdocCommand.stdout.on('data', data => {
      jsdocs += data;
    });

    jsdocCommand.stderr.on('data', data => {
      reject(data);
    });

    jsdocCommand.on('close', () => {
      resolve(JSON.parse(jsdocs));
    });
  });
}

module.exports = getJsdocs;
