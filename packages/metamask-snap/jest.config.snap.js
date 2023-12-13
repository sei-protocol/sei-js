/* eslint-env node */
module.exports = {
	maxWorkers: 1,
	preset: '@metamask/snaps-jest',
	transform: {
		'^.+\\.(t|j)sx?$': 'ts-jest'
	},
	testMatch: ['<rootDir>/src/snap/**/*.spec.ts', '**/src/lib/tests/snapWallet.spec.ts'],
	testPathIgnorePatterns: ['node_modules', 'dist']
};
