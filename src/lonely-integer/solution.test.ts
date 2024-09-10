// eslint-disable-next-line import/no-unresolved, import/extensions
import Solution from './solution';

describe('lonely-integer', () => {
  it('HackerRank - Sample Input 0', () => {
    expect(Solution.lonelyinteger([1])).toEqual(1);
  });
  it('HackerRank - Sample Input 1', () => {
    expect(Solution.lonelyinteger([1, 1, 2])).toEqual(2);
  });
  it('HackerRank - Sample Input 2', () => {
    expect(Solution.lonelyinteger([0, 0, 1, 2, 1])).toEqual(2);
  });
  it('HackerRank - Empty Array - Should return undefined', () => {
    expect(Solution.lonelyinteger([])).toEqual(-1);
  });
});

export {};
