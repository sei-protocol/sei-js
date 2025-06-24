export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	extensionsToTreatAsEsm: ['.ts'],
	transform: {
		'^.+\\.ts$': [
			'ts-jest',
			{
				useESM: true,
				tsconfig: 'tsconfig.test.json'
			}
		]
	},
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1'
	},
	testMatch: ['**/*.test.ts'],
	clearMocks: true,
	resetMocks: true
};
