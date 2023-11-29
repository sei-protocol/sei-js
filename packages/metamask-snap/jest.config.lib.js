/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['node_modules', 'dist', 'src/lib/__tests__/snapWallet.spec.ts']
};
