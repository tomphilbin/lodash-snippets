const _ = require('lodash');
const fs = require('fs');

const writeSnippets = (data) => fs.writeFileSync(`javascript.json`, data);

module.exports = writeSnippets;