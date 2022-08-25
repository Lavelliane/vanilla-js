const { test, expect } = require('@jest/globals');
const { min } = require('./script');

test('Should find the minimum number between two numbers', () => {
    const minNum = min(5, 3);
    expect(minNum).toBe(3);
});