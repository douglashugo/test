const { getAdultUsers } = require('./example.js');

describe('User Service Tests', () => {
  
  test('should return only users older than 18', async () => {
    const adultUsers = await getAdultUsers();
    
    // Esperamos que o resultado contenha apenas os usuários com mais de 18 anos
    expect(adultUsers).toEqual([
      { id: 1, name: 'John Doe', age: 25 },
      { id: 3, name: 'Mike Johnson', age: 35 },
    ]);
    
    // Verifica se todos os usuários retornados têm idade maior que 18
    adultUsers.forEach(user => {
      expect(user.age).toBeGreaterThan(18);
    });
  });

});