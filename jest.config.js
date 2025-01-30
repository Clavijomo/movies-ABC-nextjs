// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Ajusta si usas TypeScript
    testMatch: [
        '<rootDir>/app/**/*.test.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/*.test.{js,jsx,ts,tsx}',
        '<rootDir>/tests/**/*.test.{js,jsx,ts,tsx}',
    ],
    moduleDirectories: ['node_modules', '<rootDir>/src', '<rootDir>/app'],
};

module.exports = createJestConfig(customJestConfig);
