const _ = require('lodash');

const createParams = (data) => _.map(data, (x) => '${' + x.name + '}');

const joinParams = (data) => _.join(data, ', ');

const createSnippetParams = _.flow(
    createParams,
    joinParams
);

module.exports = createSnippetParams;