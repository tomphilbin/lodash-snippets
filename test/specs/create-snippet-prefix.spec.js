const sut = require('../../src/create-snippet-prefix');

describe(`create snippet prefix`, () => {
  
  it(`should make the prefix lowercase`, () => {
    const result = sut(`MmM`);
    
    expect(result).to.equal(`mmm`);
  });
  
  it(`should remove vowels from the snippet`, () => {
    const result = sut(`bacon`);
    
    expect(result).to.equal(`bcn`);
  });
  
  it(`should not remove vowels if they are the first character`, () => {
    const result = sut(`eggies`);
    
    expect(result).to.equal(`eggs`);
  });
});