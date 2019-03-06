// jest.config.js
module.exports = {
  setupFiles: [
    './tests/setup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!@pile).+\\.js$',
  ],
};
