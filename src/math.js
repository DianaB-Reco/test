function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function average(values) {
  if (!Array.isArray(values) || values.length === 0) {
    throw new Error('values must be a non-empty array');
  }
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

module.exports = {
  add,
  multiply,
  average,
};
