const { expect } = require('chai');
const { checkout } = require('../index.js');

describe('checkout', () => {
  it('Returns 0 when empty array is input', () => {
    const actualResult = checkout([]);
    const expectedResult = 0;
    expect(actualResult).to.equal(expectedResult);
  });
});
