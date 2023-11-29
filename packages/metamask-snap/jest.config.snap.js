/* eslint-env node */
module.exports = {
	preset: '@metamask/snaps-jest',
	transform: {
		'^.+\\.(t|j)sx?$': 'ts-jest'
	},
	testMatch: ['<rootDir>/src/snap/**/*.spec.ts', '**/src/lib/tests/snapWallet.spec.ts'],
	testPathIgnorePatterns: ['node_modules', 'dist']
};
