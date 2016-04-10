const _ = require('lodash');
const vowels = /(?!^)[aeiou]/ig;

const removeVowels = (str) => _.replace(str, vowels, '');

const createSnippetPrefix = _.flow(removeVowels, _.toLower);

module.exports = createSnippetPrefix;
