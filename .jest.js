module.exports = {
    setupFiles: [
      'raf/polyfill',
      './tests/setup.js',
    ],
    moduleFileExtensions: [
      'js',
      'jsx',
      'json',
      'md'
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
      'site'
    ],
    testRegex: '.*\\.test\\.js$',
    collectCoverage: false,
    collectCoverageFrom: [
      'src/components/**/*.{js}',
    ],
    // moduleNameMapper: {
    //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    //   "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
    // },
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    reporters: [
        'default',
        'jest-spec-reporter'
    ],
};
