const Solution = require('./solution');

describe('math/find-the-point.test.js', () => {
  describe('findPoint()', () => {
    it('(0,0) and (1,1) should be (2,2)', () => {
      expect(Solution.findPoint(0, 0, 1, 1)).toEqual([2, 2]);
    });
    it('(1,1) and (2,2) should be (3,3)', () => {
      expect(Solution.findPoint(1, 1, 2, 2)).toEqual([3, 3]);
    });
    it('(3,3) and (2,2) should be (1,1)', () => {
      expect(Solution.findPoint(3, 3, 2, 2)).toEqual([1, 1]);
    });
    it('(0,0) and (-2,-2) should be (-4,-4)', () => {
      expect(Solution.findPoint(0, 0, -2, -2)).toEqual([-4, -4]);
    });
  });
});
