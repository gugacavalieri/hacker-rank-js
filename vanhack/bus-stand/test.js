const { expect } = require('chai')
const Solution = require('./solution')

describe('vanhack/bus-stand.js', () => {
  describe('kthPerson()', () => {
    it('sample case 1', () => {
      expect(Solution.kthPerson(2, [1, 4, 4, 3, 1, 2, 6], [1, 2, 3, 4, 5, 6, 7])).to.deep.equal([2, 3, 3, 3, 0, 0, 0])
    })
    it('sample case 0', () => {
      expect(Solution.kthPerson(3, [2, 5, 3], [1, 5])).to.deep.equal([3, 0])
    })
  })
})
