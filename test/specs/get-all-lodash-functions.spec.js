const sut = require('../../src/get-all-lodash-functions');

describe(`get all lodash functions`, () => {
  
  const data = [
    { name: `me!`, memberof: `_` },
    { name: `notme!`, memberof: `@`}
  ];
  
  it(`should only return items with the memberof attribute as '_'`, () => {
    const result = sut(data);
    
    expect(result).to.deep.equal([{ name: `me!`, memberof: `_` }]);
  });
});