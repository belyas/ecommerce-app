const path = require('path');

module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: path.resolve(__dirname, 'packages/tsconfig.base.json'),
    },
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.(svg)$': '<rootDir>/.config/jest/assetsTransformer.ts',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testPathIgnorePatterns: ['node_modules'],
  coveragePathIgnorePatterns: ['.*/lib/.*', '.*/build/.*'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/index.{ts,tsx}',
    '!**/serviceWorker.ts',
    '!**/setupTests.ts',
    '!**/*.d.ts',
  ],
  moduleNameMapper: {
    '\\.(scss|css)$': '<rootDir>/.config/jest/styleMock.ts',
    '\\.svg$': '<rootDir>/.config/jest/fileMock.ts',
  },
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 70,
      statements: 80,
    },
  },
  // setupFiles: ['<rootDir>/.config/jest/setupFile.ts'],
};
