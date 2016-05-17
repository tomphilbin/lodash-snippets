const _ = require('lodash');

const getParamNames = (params) => _.map(params, x => '${' + x.name + '}');

const joinParamNames = (paramNames) => _.join(paramNames, ', ');

const createSnippetParams = _.flow(
    getParamNames,
    joinParamNames
);

module.exports = createSnippetParams;