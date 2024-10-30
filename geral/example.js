const users = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 17 },
    { id: 3, name: 'Mike Johnson', age: 35 },
    { id: 4, name: 'Anna Brown', age: 15 },
  ];
  
  // Função para simular busca de usuários com delay (exemplo assíncrono)
  function fetchUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(users);
      }, 1000);  // Simula 1 segundo de delay
    });
  }
  
  // Filtra usuários que têm mais de 18 anos
  async function getAdultUsers() {
    const allUsers = await fetchUsers();
    return allUsers.filter(user => user.age > 18);
  }
  
  module.exports = { getAdultUsers };  