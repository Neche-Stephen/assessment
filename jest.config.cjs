// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss)$': 'jest-css-modules',
    '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/src/tests/fileMock.js', // Adjust path
  },
};
