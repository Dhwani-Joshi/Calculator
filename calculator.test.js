const { add } = require('./calculator');

test('empty string returns 0', () => {
    expect(add('')).toBe(0);
});

test('single number returns the same number', () => {
    expect(add('1')).toBe(1);
});

test('multiple numbers are summed correctly', () => {
    expect(add('1,5')).toBe(6);
    expect(add('1,2,3')).toBe(6);
    expect(add('4,5,6,7')).toBe(22);
});

test('newlines are treated as delimiters', () => {
    expect(add('1\n2,3')).toBe(6);
    expect(add('4\n5\n6')).toBe(15);
  });
  