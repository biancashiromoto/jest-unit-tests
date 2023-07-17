/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implement the test cases for the function numbers', () => {
  it('Should return "true" when it receives an array containing only numbers', () => {
    const array = [1, 2, 3, 4, 5];
    expect(numbers(array)).toBeTruthy();
  });
  it('Should return "false" when it receives an array containing a non numerical value', () => {
    const array = [1, 2, '3', 4, 5];
    expect(numbers(array)).toBeFalsy();
  });
  it('Should return "false" when it receives an array containing an empty string', () => {
    const array = [''];
    expect(numbers(array)).toBeFalsy();
  });
});
