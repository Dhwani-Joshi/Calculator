const { add } = require('./calculator');

test('empty string returns 0', () => {
  expect(add('')).toBe(0);
});

test('single number returns the same number', () => {
    expect(add('1')).toBe(1);
  });
  