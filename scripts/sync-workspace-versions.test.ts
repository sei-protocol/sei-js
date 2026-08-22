import { describe, expect, test } from 'bun:test';
import { type ParseError, parse } from 'jsonc-parser';
import { syncWorkspaceVersions } from './sync-workspace-versions.js';

const lockfileFixture = `{
  "lockfileVersion": 1,
  "workspaces": {
    "packages/alpha": {
      "name": "@test/alpha",
      "version": "1.0.0",
      "dependencies": {
        "@test/bravo": "^2.0.0",
      },
    },
    "packages/bravo": {
      "name": "@test/bravo",
      "version": "2.0.0",
    },
    "packages/private-app": {
      "name": "private-app",
    },
  },
}
`;

describe('syncWorkspaceVersions', () => {
	test('updates multiple workspace versions without changing dependency metadata', () => {
		const result = syncWorkspaceVersions(lockfileFixture, [
			{ name: '@test/alpha', path: 'packages/alpha', version: '2.0.0' },
			{ name: '@test/bravo', path: 'packages/bravo', version: '3.0.0' }
		]);
		const parseErrors: ParseError[] = [];
		const parsed = parse(result.lockfile, parseErrors, { allowTrailingComma: true });

		expect(parseErrors).toEqual([]);
		expect(parsed.workspaces['packages/alpha'].version).toBe('2.0.0');
		expect(parsed.workspaces['packages/alpha'].dependencies['@test/bravo']).toBe('^2.0.0');
		expect(parsed.workspaces['packages/bravo'].version).toBe('3.0.0');
		expect(result.updated).toBe(2);
	});

	test('skips private workspaces without requiring lockfile version metadata', () => {
		const result = syncWorkspaceVersions(lockfileFixture, [{ name: 'private-app', path: 'packages/private-app', private: true }]);

		expect(result.lockfile).toBe(lockfileFixture);
		expect(result.skippedPrivate).toEqual(['private-app']);
		expect(result.updated).toBe(0);
	});

	test('fails when a published workspace is missing from lockfile metadata', () => {
		expect(() => syncWorkspaceVersions(lockfileFixture, [{ name: '@test/missing', path: 'packages/missing', version: '1.0.0' }])).toThrow(
			'Could not find published workspace @test/missing in bun.lock metadata'
		);
	});
});
