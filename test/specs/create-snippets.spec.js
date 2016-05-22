const sut = require('../../src/create-snippets');

describe(`create snippets`, () => {

    const data = [
        {
            description: `bacon`,
            name: `sausage`,
            longname: `_.sausage`,
            params: [{ name: `param` }]
        }
    ];

    it(`should set the key as the description`, () => {
        const result = sut(data);

        expect(result[`bacon`]).to.not.be.undefined;
    });

    it(`should set the prefix as the name`, () => {
        const result = sut(data);

        expect(result[`bacon`].prefix).to.equal(`sausage`);
    });

    it(`should set the body and params as the longname`, () => {
        const result = sut(data);

        expect(result[`bacon`].body[0]).to.equal('_.sausage(${param});');
    });
});