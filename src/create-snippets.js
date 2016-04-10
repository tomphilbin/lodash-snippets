const _ = require('lodash');
const createSnippetPrefix = require('./create-snippet-prefix');

const createSnippets = (data) => _.reduce(data, (result, value) => {
  result[value.description] = {
    prefix: createSnippetPrefix(value.name),
    body: [
      `${value.longname}($1);`
    ]
  };
  return result;
}, {});

module.exports = createSnippets;