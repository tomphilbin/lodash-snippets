const sut = require('../../src/create-snippet-params');

describe(`create snippet params`, () => {

    it(`should return the parameters joined with a comma`, () => {
        const params = [
            { name: 'firstName' },
            { name: 'secondName' }
        ];

        const result = sut(params);

        expect(result).to.equal('${firstName}, ${secondName}');
    });

    it(`should not add a comma if there is only one param`, () => {
        const params = [
            { name: 'oneParam' }
        ];
        const result = sut(params);

        expect(result).to.not.contain(`,`);
    })
});