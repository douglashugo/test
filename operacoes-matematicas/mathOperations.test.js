// mathOperations.test.js
import * as mathOperations from './mathOperations';

test('Deve calcular a área chamando a função multiply', () => {
  // Espia a função multiply
  const spyMultiply = jest.spyOn(mathOperations, 'multiply');

  // Executa a função calculateArea
  const area = mathOperations.calculateArea(5, 10);

  // Verifica se a função multiply foi chamada corretamente
  expect(spyMultiply).toHaveBeenCalledWith(5, 10);

  // Verifica o valor de retorno
  expect(area).toBe(50);

  // Restaura o comportamento original da função multiply
  spyMultiply.mockRestore();
});