export default {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '\\.ts$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  coverageDirectory: './coverage',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  clearMocks: true,
};
