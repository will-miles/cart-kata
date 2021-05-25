const { expect } = require('chai');
const {
  checkout,
  possibleItems,
  discountPrices,
} = require('../utils/utils.js');

describe('checkout', () => {
  it('Returns 0 when empty array is input', () => {
    const actualResult = checkout([]);
    const expectedResult = 0;
    expect(actualResult).to.equal(expectedResult);
  });

  it('Returns 50 when passed array conataining only `A`', () => {
    const actualResult = checkout(['A']);
    const expectedResult = possibleItems.A;
    expect(actualResult).to.equal(expectedResult);
  });

  it('Returns correct value for cart conatining any 1 item', () => {
    let actualResult = checkout(['B']);
    let expectedResult = possibleItems.B;
    expect(actualResult).to.equal(expectedResult);
    actualResult = checkout(['C']);
    expectedResult = possibleItems.C;
    expect(actualResult).to.equal(expectedResult);
    actualResult = checkout(['D']);
    expectedResult = possibleItems.D;
    expect(actualResult).to.equal(expectedResult);
  });

  it('Returns the sum value of an array with more than 1 item, with no discount', () => {
    const actualResult = checkout(['A', 'B']);
    const expectedResult = possibleItems.A + possibleItems.B;
    expect(actualResult).to.equal(expectedResult);
  });

  it('Returns the discounted value of a valid dicountable array', () => {
    let actualResult = checkout(['A', 'A', 'A']);
    let expectedResult = discountPrices.A;
    expect(actualResult).to.equal(expectedResult);
    actualResult = checkout(['B', 'B']);
    expectedResult = discountPrices.B;
    expect(actualResult).to.equal(expectedResult);
  });

  it('Returns the correct value of a complex array', () => {
    const actualResult = checkout([
      'A',
      'A',
      'A',
      'B',
      'B',
      'B',
      'C',
      'D',
      'D',
    ]);
    const expectedResult = 284;
    expect(actualResult).to.equal(expectedResult);
  });
});
