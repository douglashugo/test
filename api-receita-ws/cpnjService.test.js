// cnpjService.test.js
const { getCnpjInfo } = require('./cnpjService');

// Mock da função fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      cnpj: '00000000000191',
      nome: 'Empresa Mockada LTDA',
      atividade_principal: [{ text: 'Comércio varejista' }]
    })
  })
);

test('Deve retornar as informações do CNPJ', async () => {
  const cnpj = '00000000000191';
  const cnpjInfo = await getCnpjInfo(cnpj);
  
  // Verifica se o fetch foi chamado com a URL correta
  expect(fetch).toHaveBeenCalledWith(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);

  // Verifica se os dados retornados estão corretos
  expect(cnpjInfo).toEqual({
    cnpj: '00000000000191',
    nome: 'Empresa Mockada LTDA',
    atividade_principal: [{ text: 'Comércio varejista' }]
  });
});
