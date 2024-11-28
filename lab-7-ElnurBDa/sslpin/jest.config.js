module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  testRunner: 'jest-circus/runner',
  extensionsToTreatAsEsm: ['.ts'], // Optional: if you're using ESM
};

