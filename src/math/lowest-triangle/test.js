const { expect } = require('chai')
const Solution = require('./solution')

describe('math/lowest-triangle.test.js', () => {
  describe('lowestTriangle()', () => {
    it('(2,2) should return 2', () => {
      expect(Solution.lowestTriangle(2, 2)).to.equal(2)
    })
    it('(17,100) should return 12', () => {
      expect(Solution.lowestTriangle(17, 100)).to.equal(12)
    })
    it('(100,100) should return 2', () => {
      expect(Solution.lowestTriangle(100, 100)).to.equal(2)
    })
    it('(100,50) should return 1', () => {
      expect(Solution.lowestTriangle(100, 50)).to.equal(1)
    })
  })
})
