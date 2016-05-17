const sut = require('../../src/pretty-stringify');

describe(`get all lodash functions`, () => {

    const data = { name: `some json` };

    it(`should prettify the json with 4 spaces`, () => {
        const result = sut(data);

        expect(result).to.equal(`{\n    "name": "some json"\n}`);
    });
});