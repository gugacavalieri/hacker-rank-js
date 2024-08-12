// eslint-disable-next-line import/no-unresolved
const Solution = require('./solution.ts');

describe('birthday-cake-candles', () => {
  it('HackerRank - Sample Input 0', () => {
    expect(Solution.birthdayCakeCandles([3, 2, 1, 3])).toEqual(2);
  });
  it('Custom Input #1', () => {
    expect(Solution.birthdayCakeCandles([3, 2, 1, 3, 3, 3, 3])).toEqual(5);
  });
  it('Custom Input #2', () => {
    expect(Solution.birthdayCakeCandles([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual(10);
  });
  it('Custom Input #3', () => {
    expect(Solution.birthdayCakeCandles([0])).toEqual(1);
  });
  it('Should Return Undefined for Empty Array', () => {
    expect(Solution.birthdayCakeCandles([])).toEqual(undefined);
  });
});
