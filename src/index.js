import _ from 'lodash';
import fs from 'fs';
import createSnippets from './create-snippets';

const getLodashMembers = data => _.filter(data, x => x.memberof === '_');
const prettyStringify = data => JSON.stringify(data, null, 4);
const writeSnippets = data => fs.writeFileSync('javascript.json', data);

const snippetsFlow = _.flow(
  fs.readFileSync,
  JSON.parse,
  getLodashMembers,
  createSnippets,
  prettyStringify,
  writeSnippets
);

snippetsFlow('./jsdoc-output.json');
