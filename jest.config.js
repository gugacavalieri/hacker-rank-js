/** @type {import('ts-jest').JestConfigWithTsJest} * */
module.exports = {
  testEnvironment: 'node',
  testTimeout: 500,
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
};
