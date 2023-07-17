/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no console do navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

describe('4 - Implement the test cases for the function circle', () => {
  it('Should return an object containing the radius, area and circumference of the circle', () => {
    expect(circle(2)).toHaveProperty('radius');
    expect(circle(2)).toHaveProperty('area');
    expect(circle(2)).toHaveProperty('circumference');
  });
  it('Should return "undefined" if it receives no parameter', () => {
    expect(circle()).toBeUndefined();
  });
  it('Should return "undefined" if it receives a non numerical value as parameter', () => {
    expect(circle('a')).toBeUndefined();
  });
  it('Should return an object with the correct values for area and circumference', () => {
    expect(circle(3).area).toBeCloseTo(28.26);
    expect(circle(3).circumference).toBe(18.84);
  });
});
