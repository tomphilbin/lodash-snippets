const _ = require('lodash');

const getLodashMembers = (data) => _.filter(data, (x) => x.memberof === '_');

module.exports = getLodashMembers;