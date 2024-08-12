const Solution = require('./solution');

describe('dictionaries-and-hashmaps/two-strings.test.js', () => {
  describe('twoStrings()', () => {
    it('a and abc should return true', () => {
      expect(Solution.twoStrings('a', 'abc')).toEqual('YES');
    });
    it('def and abc should return false', () => {
      expect(Solution.twoStrings('def', 'abc')).toEqual('NO');
    });
    it('hello and world should return true', () => {
      expect(Solution.twoStrings('hello', 'world')).toEqual('YES');
    });
    it('hi and world should return false', () => {
      expect(Solution.twoStrings('hi', 'world')).toEqual('NO');
    });
    it('aardvark and apple should return true', () => {
      expect(Solution.twoStrings('aardvark', 'apple')).toEqual('YES');
    });
    it('beetroot and sandals should return false', () => {
      expect(Solution.twoStrings('beetroot', 'sandals')).toEqual('NO');
    });
  });
});
