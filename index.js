const _ = require('lodash');
const fs = require('fs');

const vowelsAndWhiteSpace = /(?!^)[aeiou\s]/ig;

const getAllLodashMembers = (json) => {
  return _.filter(json, (item) => item.memberof === '_');
};

const removeVowelsAndWhitespace = (str) => _.replace(str, vowelsAndWhiteSpace, '');

const createSnippetPrefix = _.flow(_.lowerCase, removeVowelsAndWhitespace);

const createSnippets = (data) => _.reduce(data, (result, value) => {
  result[value.description] = {
    prefix: createSnippetPrefix(value.name),
    body: [
      `${value.longname}($1)`
    ]
  };
  return result;
}, {});

const prettyStringify = (json) => JSON.stringify(json, null, 4);

const writeFile = (data) => fs.writeFileSync('javascript.json', data);

const readFile = (fileLocation) => fs.readFileSync

const snippetsFlow = _.flow(
  fs.readFileSync,
  JSON.parse,
  getAllLodashMembers,
  createSnippets,
  prettyStringify,
  writeFile);

snippetsFlow('./jsdoc-output.json');