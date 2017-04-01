const map = require('lodash.map');
const reduce = require('lodash.reduce');

function buildParameters(params = []) {
  return map(params, p => `\${${p.name}}`).join(', ');
}

const snippetsReducer = (accumulator, value) => {
  const parameters = buildParameters(value.params);
  const snippet = {
    [value.description]: {
      prefix: value.name,
      body: [`${value.longname}(${parameters})`],
    },
  };

  return Object.assign({}, accumulator, snippet);
};

function buildSnippets(jsdocs) {
  return reduce(jsdocs, snippetsReducer, {});
}

module.exports = buildSnippets;
