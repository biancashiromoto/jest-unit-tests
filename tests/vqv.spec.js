const vqv = require('../src/vqv');

describe('3 - Implement the test cases for the function vqv', () => {
  it('Should return a string', () => {
    expect(typeof vqv('Bianca', 30)).toBe('string');
  });
  it('Should return a string containing the correct text', () => {
    const result = 'Oi, meu nome é Bianca!\nTenho 30 anos';
    expect(vqv('Bianca', 30)).toBe(result);
  });
  it('Should return "undefined" if it does not receive any parameter', () => {
    expect(vqv()).toBeUndefined();
  });
})