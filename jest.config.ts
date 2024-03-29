import { getJestProjects } from '@nx/jest';

export default {
	projects: getJestProjects(),
	preset: 'ts-jest',
	testMatch: ['**/*.spec.ts', '**/*.spec.tsx'],
	globals: {
		'ts-jest': {
			tsconfig: './tsconfig.base.json'
		}
	},
	modulePathIgnorePatterns: ['<rootDir>/packages/*/dist/']
};
