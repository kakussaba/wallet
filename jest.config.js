module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};
