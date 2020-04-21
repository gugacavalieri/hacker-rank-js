const { expect } = require('chai')
const Solution = require('./solution')

describe('arrays/simple-array-sum.test.js', () => {
  describe('simpleArraySum()', () => {
    it('should return 31', () => {
      // given
      const array = [1, 2, 3, 4, 10, 11]

      // when
      const result = Solution.simpleArraySum(array)

      // then
      expect(result).to.equal(31)
    })
    it('should return 0', () => {
      // given
      const array = []

      // when
      const result = Solution.simpleArraySum(array)

      // then
      expect(result).to.equal(0)
    })
    it('should return 1', () => {
      // given
      const array = [1]

      // when
      const result = Solution.simpleArraySum(array)

      // then
      expect(result).to.equal(1)
    })
    it('should return 41', () => {
      // given
      const array = [1, 40]

      // when
      const result = Solution.simpleArraySum(array)

      // then
      expect(result).to.equal(41)
    })
  })
})
