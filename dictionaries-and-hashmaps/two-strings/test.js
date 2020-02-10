const { expect } = require('chai')
const Solution = require('./solution')

describe('dictionaries-and-hashmaps/two-strings.test.js', () => {
  describe('twoStrings()', () => {
    it('a and abc should return true', () => {
      expect(Solution.twoStrings('a', 'abc')).to.equal('YES')
    })
    it('def and abc should return false', () => {
      expect(Solution.twoStrings('def', 'abc')).to.equal('NO')
    })
    it('hello and world should return true', () => {
      expect(Solution.twoStrings('hello', 'world')).to.equal('YES')
    })
    it('hi and world should return false', () => {
      expect(Solution.twoStrings('hi', 'world')).to.equal('NO')
    })
    it('aardvark and apple should return true', () => {
      expect(Solution.twoStrings('aardvark', 'apple')).to.equal('YES')
    })
    it('beetroot and sandals should return false', () => {
      expect(Solution.twoStrings('beetroot', 'sandals')).to.equal('NO')
    })
  })
})
