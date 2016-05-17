const _ = require('lodash');
const createSnippetPrefix = require('./create-snippet-prefix');
const createSnippetParams = require('./create-snippet-params');

const createSnippets = (data) => _.reduce(data, (result, value) => {
    result[value.description] = {
        prefix: createSnippetPrefix(value.name),
        body: [
            `${value.longname}(${createSnippetParams(value.params)});`
        ]
    };
    return result;
}, {});

module.exports = createSnippets;