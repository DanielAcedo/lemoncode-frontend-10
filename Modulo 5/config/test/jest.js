module.exports = {
  rootDir: '../../',
  preset: 'ts-jest',
  restoreMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/test/setup-after.ts'],
  moduleNameMapper: {
    '^common(.*)$': '<rootDir>/src/common/$1',
    '^core(.*)$': '<rootDir>/src/core/$1',
  },
};
