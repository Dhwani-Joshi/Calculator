const { add } = require('./calculator');

test('empty string returns 0', () => {
  expect(add('')).toBe(0);
});
