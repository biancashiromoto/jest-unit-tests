const {createStudent, returnPhrase} = require('../src/createStudent');

describe('5 - Implement the test cases for the function createStudent', () => {
  it('The function returnPhrase should return the phrase "Nice guy!"', () => {
    expect(returnPhrase()).toBe('Nice guy!');
  });
  it('Should return an object containing two keys: name (received as parameter) and feedback (function returnPhrase)', () => {
    const result = {
      name: 'Brian',
      feedback: returnPhrase,
    }
    expect(createStudent('Brian')).toEqual(result);
  });
});