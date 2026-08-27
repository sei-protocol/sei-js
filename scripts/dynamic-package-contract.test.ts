import { describe, expect, test } from 'bun:test';
import { highestVersion, normalizeNpmViewVersions, parseNpmViewResult } from './dynamic-package-contract.js';

describe('Dynamic registry contract helpers', () => {
	test('normalizes npm view version scalars, arrays, and absent values', () => {
		expect(normalizeNpmViewVersions('4.96.4')).toEqual(['4.96.4']);
		expect(normalizeNpmViewVersions(['4.96.3', '4.96.4'])).toEqual(['4.96.3', '4.96.4']);
		expect(normalizeNpmViewVersions(undefined)).toEqual([]);
	});

	test('selects the highest stable or prerelease version semantically', () => {
		expect(highestVersion(['4.96.4-beta.10', '4.96.3', '4.96.4-beta.2', '4.96.4'])).toBe('4.96.4');
		expect(highestVersion(['4.96.4-beta.2', '4.96.4-beta.10'])).toBe('4.96.4-beta.10');
	});

	test('parses npm view JSON scalars and arrays', () => {
		expect(parseNpmViewResult<string>({ exitCode: 0, stderr: '', stdout: '"4.96.4"\n' }, 'npm view')).toBe('4.96.4');
		expect(parseNpmViewResult<string[]>({ exitCode: 0, stderr: '', stdout: '["4.96.3","4.96.4"]\n' }, 'npm view')).toEqual(['4.96.3', '4.96.4']);
	});

	test('returns no value for absent fields and versions', () => {
		expect(parseNpmViewResult({ exitCode: 0, stderr: '', stdout: '' }, 'npm view')).toBeUndefined();
		expect(
			parseNpmViewResult(
				{
					exitCode: 1,
					stderr: 'npm error code E404\n',
					stdout: '{"error":{"code":"E404","summary":"No match found"}}'
				},
				'npm view'
			)
		).toBeUndefined();
	});

	test('preserves non-404 registry failures', () => {
		expect(() => parseNpmViewResult({ exitCode: 1, stderr: 'npm error code EAI_AGAIN\n', stdout: '' }, 'npm view package version --json')).toThrow(
			'npm view package version --json failed\nnpm error code EAI_AGAIN'
		);
	});
});
