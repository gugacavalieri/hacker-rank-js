const { expect } = require('chai')
const Solution = require('./solution')

describe('math/handshake.test.js', () => {
  describe('handshake()', () => {
    it('n=0 should produce 0 handshakes', () => {
      expect(Solution.handshake(0)).to.equal(0)
    })
    it('n=1 should produce 0 handshakes', () => {
      expect(Solution.handshake(1)).to.equal(0)
    })
    it('n=2 should produce 1 handshakes', () => {
      expect(Solution.handshake(2)).to.equal(1)
    })
    it('n=3 should produce 3 handshakes', () => {
      expect(Solution.handshake(3)).to.equal(3)
    })
    it('n=4 should produce 6 handshakes', () => {
      expect(Solution.handshake(4)).to.equal(6)
    })
    it('n=5 should produce 10 handshakes', () => {
      expect(Solution.handshake(4)).to.equal(6)
    })
    it('n=10 should produce 10 handshakes', () => {
      expect(Solution.handshake(10)).to.equal(45)
    })
    it('n=333 should produce 55278 handshakes', () => {
      expect(Solution.handshake(333)).to.equal(55278)
    })
  })
})
