/* eslint-env node */
module.exports = {
	preset: '@metamask/snaps-jest',
	transform: {
		'^.+\\.(t|j)sx?$': 'ts-jest'
	},
	testPathIncludePatterns: ['src/lib/tests/snapWallet.spec.ts'],
	testPathIgnorePatterns: ['node_modules', 'dist']
};
