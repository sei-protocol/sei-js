/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	modulePathIgnorePatterns: ['<rootDir>/dist/']
};
