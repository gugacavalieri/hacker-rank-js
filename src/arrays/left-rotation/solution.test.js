const Solution = require('./solution');

describe('arrays/left-rotation.test.js', () => {
  describe('rotLeft()', () => {
    it('should rotate array to left 4 positions', () => {
      // given
      const array = [1, 2, 3, 4, 5];

      // when
      const result = Solution.rotLeft(array, 4);

      // then
      expect(result).toEqual([5, 1, 2, 3, 4]);
    });
    it('should rotate array to left 0 positions', () => {
      // given
      const array = [1, 2, 3, 4, 5];

      // when
      const result = Solution.rotLeft(array, 0);

      // then
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });
    it('should rotate array to left 5 positions', () => {
      // given
      const array = [1, 2, 3, 4, 5];

      // when
      const result = Solution.rotLeft(array, 5);

      // then
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });
    it('should rotate array to left 10 positions', () => {
      // given
      const array = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51];

      // when
      const result = Solution.rotLeft(array, 10);

      // then
      // eslint-disable-next-line max-len
      expect(result).toEqual([77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 77]);
    });
    it('should rotate empty array', () => {
      // given
      const array = [];

      // when
      const result = Solution.rotLeft(array, 1);

      // then
      expect(result).toEqual([]);
    });
  });
});
