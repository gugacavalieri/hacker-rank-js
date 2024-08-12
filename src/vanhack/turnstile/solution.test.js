const Solution = require('./solution');

describe('vanhack/turnstile.js', () => {
  describe('getTimes()', () => {
    it('sample case 0', () => {
      expect(Solution.getTimes([0, 0, 1, 5], [0, 1, 1, 0])).toEqual([2, 0, 1, 5]);
    });
    it('sample case 1', () => {
      expect(Solution.getTimes([1, 2, 3, 4], [1, 1, 1, 1])).toEqual([1, 2, 3, 4]);
    });
    it('sample case 2', () => {
      expect(Solution.getTimes([1, 1, 1, 1], [0, 1, 1, 1])).toEqual([4, 1, 2, 3]);
    });
    it('sample case 3', () => {
      expect(Solution.getTimes([0, 1, 1, 1], [0, 1, 1, 1])).toEqual([0, 1, 2, 3]);
    });
    it('sample case 4', () => {
      expect(Solution.getTimes([0, 0, 0, 0], [0, 1, 0, 1])).toEqual([2, 0, 3, 1]);
    });
  });
});
