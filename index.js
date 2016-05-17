const _ = require('lodash');
const fs = require('fs');
const getAllLodashFunctions = require('./src/get-all-lodash-functions');
const createSnippets = require('./src/create-snippets');
const prettyStringify = require('./src/pretty-stringify');
const writeSnippets = require('./src/write-snippets');

const snippetsFlow = _.flow(
    fs.readFileSync,
    JSON.parse,
    getAllLodashFunctions,
    createSnippets,
    prettyStringify,
    writeSnippets
);

snippetsFlow('./jsdoc-output.json');