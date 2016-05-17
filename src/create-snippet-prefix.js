const _ = require('lodash');
const vowels = /(?!^)[aeiou]/ig;

const removeVowels = (str) => {
    if (str.length > 4) {
        return _.replace(str, vowels, '');
    } else {
        return str;
    }
};

const createSnippetPrefix = _.flow(
    removeVowels,
    _.toLower
);

module.exports = createSnippetPrefix;
