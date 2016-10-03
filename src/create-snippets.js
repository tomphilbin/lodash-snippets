import _ from 'lodash';
import createSnippetParams from './create-snippet-params';

const createSnippets = data => _.reduce(data, (result, value) => {
  const newResult = result;

  newResult[value.description] = {
    prefix: value.name,
    body: [
      `${value.longname}(${createSnippetParams(value.params)})`,
    ],
  };

  return newResult;
}, {});

export default createSnippets;
