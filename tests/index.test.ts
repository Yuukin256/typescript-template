import { sum } from 'index';

test('sum', () => {
  expect(sum()).toBe(0);
  expect(sum(5)).toBe(5);
  expect(sum(1, -4)).toBe(-3);
  expect(sum(-100, -10)).toBe(-110);
  expect(sum(NaN, 15)).toBe(NaN);
});
