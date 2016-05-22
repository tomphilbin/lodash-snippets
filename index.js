const _ = require('lodash');
const fs = require('fs');
const getLodashMembers = require('./src/get-lodash-members');
const createSnippets = require('./src/create-snippets');
const prettyStringify = require('./src/pretty-stringify');
const writeSnippets = require('./src/write-snippets');

const snippetsFlow = _.flow(
    fs.readFileSync,
    JSON.parse,
    getLodashMembers,
    createSnippets,
    prettyStringify,
    writeSnippets
);

snippetsFlow('./jsdoc-output.json');