// mathOperations.js
const multiply = (a, b) => a * b;

const calculateArea = (width, height) => {
  // Referencie a função multiply através de exports para que possa ser espiada no teste
  return module.exports.multiply(width, height);
};

module.exports = {
  multiply,
  calculateArea
};