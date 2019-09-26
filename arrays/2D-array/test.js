const { expect } = require('chai')
const Solution = require('./solution')

describe('arrays/2d-array.test.js', () => {
  describe('hourglassSum()', () => {
    it('sum in test case one should be 19', () => {
      const array = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
      ]
      expect(Solution.hourglassSum(array)).to.equal(19)
    })
    it('sum in test case one should be 13', () => {
      const array = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 9, 2, -4, -4, 0],
        [0, 0, 0, -2, 0, 0],
        [0, 0, -1, -2, -4, 0]
      ]
      expect(Solution.hourglassSum(array)).to.equal(13)
    })
  })
})
