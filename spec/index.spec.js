const { expect } = require('chai');
const { checkout } = require('../index.js');

describe('checkout', () => {
  it('Returns 0 when empty array is input', () => {
    const actualResult = checkout([]);
    const expectedResult = 0;
    expect(actualResult).to.equal(expectedResult);
  });
  it('Returns 50 when passed array conataining only `A`', () => {
    const actualResult = checkout(['A']);
    const expectedResult = 50;
    expect(actualResult).to.equal(expectedResult);
  });
  it('Returns correct value for cart conatining any 1 item', () => {
    let actualResult = checkout(['B']);
    let expectedResult = 35;
    expect(actualResult).to.equal(expectedResult);
    actualResult = checkout(['C']);
    expectedResult = 25;
    expect(actualResult).to.equal(expectedResult);
    actualResult = checkout(['D']);
    expectedResult = 12;
    expect(actualResult).to.equal(expectedResult);
  });
  it('Returns the sum value of an array with more than 1 item, with no discount', () => {
    const actualResult = checkout(['A', 'B']);
    const expectedResult = 85;
    expect(actualResult).to.equal(expectedResult);
  });
});
