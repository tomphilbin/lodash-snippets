const fs = require('fs');
const filter = require('lodash.filter');
const { error, info } = require('winston');

const { outputFile } = require('../config');
const getJsdocs = require('../get-jsdocs');
const buildSnippets = require('../build-snippets');

async function lodashSnippets() {
  try {
    const jsdocs = await getJsdocs();
    const lodashFunctions = filter(jsdocs, doc => doc.memberof === '_');
    const snippets = buildSnippets(lodashFunctions);
    const prettySnippets = JSON.stringify(snippets, null, 4);
    fs.writeFileSync(outputFile, prettySnippets, 'UTF-8');
    info(`Snippets written to ${outputFile}`);
  } catch (ex) {
    error(ex);
  }
}

module.exports = lodashSnippets;
