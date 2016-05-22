const _ = require('lodash');

const prettyStringify = (data) => JSON.stringify(data, null, 4);

module.exports = prettyStringify;