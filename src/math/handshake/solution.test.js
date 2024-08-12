const Solution = require('./solution');

describe('math/handshake.test.js', () => {
  describe('handshake()', () => {
    it('n=0 should produce 0 handshakes', () => {
      expect(Solution.handshake(0)).toEqual(-0);
    });
    it('n=1 should produce 0 handshakes', () => {
      expect(Solution.handshake(1)).toEqual(0);
    });
    it('n=2 should produce 1 handshakes', () => {
      expect(Solution.handshake(2)).toEqual(1);
    });
    it('n=3 should produce 3 handshakes', () => {
      expect(Solution.handshake(3)).toEqual(3);
    });
    it('n=4 should produce 6 handshakes', () => {
      expect(Solution.handshake(4)).toEqual(6);
    });
    it('n=5 should produce 10 handshakes', () => {
      expect(Solution.handshake(4)).toEqual(6);
    });
    it('n=10 should produce 10 handshakes', () => {
      expect(Solution.handshake(10)).toEqual(45);
    });
    it('n=333 should produce 55278 handshakes', () => {
      expect(Solution.handshake(333)).toEqual(55278);
    });
  });
});
