const path = require('path');
const appDir = __dirname;

module.exports = {
  rootDir: './',
  projects: ['<rootDir>/packages/*'],
  // ignore build folders
  testPathIgnorePatterns: ['build'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  testMatch: ['**/__tests__/**/*.{ts,js}', '**/?(*.)(spec|test).{ts,js}'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: ['src/**/*.{ts,js}', '!**/*.d.ts'],
  coverageReporters: ['lcov', 'text', 'html'],
  coverageThreshold: {
    global: {
      // should specify the minimum test coverage here
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/build/'],
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '\\.ts$': path.join(appDir, 'test/tsTransform.js'),
    '^.+\\.js$': path.join(appDir, 'test/babelTransform.js'),
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
};
