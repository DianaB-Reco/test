const { add, multiply, average } = require('../src/math');

describe('math utilities', () => {
  test('add should sum two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('multiply should multiply two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('average should compute the mean of an array', () => {
    expect(average([2, 4, 6, 8])).toBe(5);
  });

  test('average should throw on invalid input', () => {
    expect(() => average([])).toThrow('values must be a non-empty array');
  });
});
