const { calculator, arrayGenerator } = require('../src/objPlayground');

describe('7 - Implement test cases for the functions calculator and arrayGenerator', () => {
  const result = {
    div: 0,
    mult: 2,
    sub: -1,
    sum: 3,
  }
  it('Should the function calculator return an object containing the correct values', () => {
    expect(calculator(1, 2)).toEqual(result);
  });
  it('Should the function calculator return "undefined" if the type of any parameter is not a number', () => {
    expect(calculator('a', 2)).toBeUndefined();
  });
  it('Should the function arrayGenerator return an array containing the specified type values', () => {
    const array = ['div', 'mult', 'sub', 'sum']
    expect(arrayGenerator('keys', result)).toEqual(array);
  });
});