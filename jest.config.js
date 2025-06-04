// jest.config.js
const nextJest = require('next/jest');

// Create Jest config with Next.js support
const createJestConfig = nextJest({
    dir: './', // Path to your Next.js app root
});

const customJestConfig = {
    // File to run after Jest environment is set up (custom matchers etc.)
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

    // Use jsdom for testing DOM-related code
    testEnvironment: 'jsdom',

    // Support for absolute imports with `@/`
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },

    // Optional: collect code coverage
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
};

module.exports = createJestConfig(customJestConfig);
