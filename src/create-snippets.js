import _ from 'lodash';
import createSnippetParams from './create-snippet-params';

const createSnippets = data => _.reduce(data, (result, value) => {
  const newResult = result;
  const params = createSnippetParams(value.params);

  newResult[value.description] = {
    prefix: value.name,
    body: [
      `${value.longname}(${params})`,
    ],
  };

  return newResult;
}, {});

export default createSnippets;
