/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	preset: 'ts-jest',
	testMatch: ['**/*.spec.ts', '**/*.spec.tsx'],
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.json',
		},
	},
	modulePathIgnorePatterns: ['<rootDir>/packages/*/dist/'],
	projects: ['<rootDir>/packages/*'],
};
