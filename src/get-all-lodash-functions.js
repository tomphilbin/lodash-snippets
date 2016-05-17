const _ = require('lodash');

const getAllLodashFunctions = (jsdocs) => {
    return _.filter(jsdocs, (item) => item.memberof === '_');
};

module.exports = getAllLodashFunctions;