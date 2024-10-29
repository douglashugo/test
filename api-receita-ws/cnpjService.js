// cnpjService.js
export const getCnpjInfo = (cnpj) => {
    return fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`)
      .then(response => response.json());
  };