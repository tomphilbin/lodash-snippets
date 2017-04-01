const buildSnippets = require('./build-snippets');

test('it should join function parameters with a comma', () => {
  const snippets = buildSnippets([
    {
      description: 'breakfast',
      params: [{ name: 'bacon' }, { name: 'sausage' }],
    },
  ]);

  expect(snippets.breakfast.body[0]).toEqual(
    expect.stringMatching(/\${bacon}, \${sausage}/),
  );
});

test('it should not contain a comma for functions with single parameters', () => {
  const snippets = buildSnippets([
    { description: 'breakfast', params: [{ name: 'bacon' }] },
  ]);

  expect(snippets.breakfast.body[0]).not.toContain(',');
});

test('it should not contain parameters when none are provided', () => {
  const snippets = buildSnippets([
    {
      description: 'breakfast',
      params: [],
    },
  ]);

  expect(snippets.breakfast.body[0]).toContain('()');
});

test('it should set the key as the description', () => {
  const snippets = buildSnippets([{ description: 'bacon' }]);

  expect(snippets).toHaveProperty('bacon');
});

test('it should set the prefix as the name', () => {
  const snippets = buildSnippets([
    {
      description: 'bacon',
      name: 'sausage',
    },
  ]);

  expect(snippets.bacon.prefix).toBe('sausage');
});

test('it should set the body as the longname', () => {
  const snippets = buildSnippets([
    {
      description: 'bacon',
      longname: '_.sausage',
    },
  ]);

  expect(snippets.bacon.body[0]).toBe('_.sausage()');
});
