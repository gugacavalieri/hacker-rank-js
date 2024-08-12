const Solution = require('./solution');

describe('warmup/compare-the-triplets/solution.test.js', () => {
  describe('compareTriplets()', () => {
    it('empty arrays should return zero points', () => {
      expect(Solution.compareTriplets([], [])).toEqual([0, 0]);
    });
    it('draw should return zero points', () => {
      expect(Solution.compareTriplets([1], [1])).toEqual([0, 0]);
    });
    it('draw should return one point', () => {
      expect(Solution.compareTriplets([2, 1], [1, 2])).toEqual([1, 1]);
    });
    it('alice should win', () => {
      expect(Solution.compareTriplets([17, 28, 30], [99, 16, 8])).toEqual([2, 1]);
    });
    it('a new draw with each winning once', () => {
      expect(Solution.compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
    });
    it('Alice wins all rounds', () => {
      expect(Solution.compareTriplets([44, 45, 46], [3, 6, 10])).toEqual([3, 0]);
    });
    it('Bob wins all rounds', () => {
      expect(Solution.compareTriplets([1, 1, 2], [3, 6, 10])).toEqual([0, 3]);
    });
  });
});
