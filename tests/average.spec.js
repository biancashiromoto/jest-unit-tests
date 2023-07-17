const average = require('../src/average');

describe('1 - Implement the test cases for the function average', () => {
  it('Should return "undefined" if it recieves an empty array', () => {
    expect(typeof average([])).toBeUndefined();
  });
  it('Should return "undefined" if the recieved array contains a non numerical value', () => {
    const array = ['a', 2, 3]
    expect(average(array)).toBeUndefined();
  });
  it('Should return the average of the recieved array', () => {
    const array = [1, 2, 3, 4, 5]
    expect(average(array)).toBe(3);
  });
});