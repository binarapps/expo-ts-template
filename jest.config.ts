import type { Config } from 'jest'

const config: Config = {
  preset: 'jest-expo',
  setupFiles: ['./jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/e2e/', '<rootDir>/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@sentry/.*)',
  ],
  rootDir: './',
  moduleNameMapper: {
    '~(.*)': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
}

export default config
