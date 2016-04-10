const _ = require('lodash');

const prettyStringify = (json) => JSON.stringify(json, null, 4);

module.exports = prettyStringify;