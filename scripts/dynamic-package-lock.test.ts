import { describe, expect, test } from 'bun:test';
import {
	collectDynamicLineVersions,
	dynamicLockPackageName,
	findDynamicLineConflicts,
	formatDynamicLineConflicts,
	listDynamicPackageInstallations
} from './dynamic-package-lock.js';

describe('dynamic package lock locations', () => {
	test('names hoisted and nested Dynamic packages, and nothing else', () => {
		expect(dynamicLockPackageName('node_modules/@dynamic-labs/logger')).toBe('@dynamic-labs/logger');
		expect(dynamicLockPackageName('node_modules/@dynamic-labs/global-wallet-client')).toBe('@dynamic-labs/global-wallet-client');
		expect(dynamicLockPackageName('node_modules/foo/node_modules/@dynamic-labs/logger')).toBe('@dynamic-labs/logger');
		expect(dynamicLockPackageName('node_modules/a/node_modules/b/node_modules/@dynamic-labs/store')).toBe('@dynamic-labs/store');
		expect(dynamicLockPackageName('node_modules/@dynamic-labs')).toBeUndefined();
		expect(dynamicLockPackageName('node_modules/axios')).toBeUndefined();
	});

	test('lists a client installed only beneath the package that depends on it', () => {
		expect(
			listDynamicPackageInstallations(
				{
					'node_modules/@dynamic-labs/ethereum-aa': { version: '4.96.3' },
					'node_modules/@sei-js/sei-global-wallet/node_modules/@dynamic-labs/global-wallet-client': { version: '4.96.4' },
					'node_modules/@sei-js/sei-global-wallet/node_modules/@dynamic-labs/types': { version: '4.96.4' }
				},
				'@dynamic-labs/global-wallet-client'
			)
		).toEqual(['node_modules/@sei-js/sei-global-wallet/node_modules/@dynamic-labs/global-wallet-client@4.96.4']);
	});

	test('collects only the resolutions inside the requested major line', () => {
		const versions = collectDynamicLineVersions(
			{
				'node_modules/@dynamic-labs/logger': { version: '4.96.3' },
				'node_modules/viem/node_modules/@dynamic-labs/logger': { version: '4.96.1' },
				// zksync-sso brings its own Dynamic 5.x line, which is not this runtime.
				'node_modules/zksync-sso/node_modules/@dynamic-labs/logger': { version: '5.3.2' },
				'node_modules/@dynamic-labs/sdk-api-core': { version: '0.12.0' },
				'node_modules/axios': { version: '1.18.0' }
			},
			'4.96.3'
		);

		expect([...(versions.get('@dynamic-labs/logger') ?? [])].sort()).toEqual(['4.96.1', '4.96.3']);
		expect(versions.has('@dynamic-labs/sdk-api-core')).toBe(false);
		expect(versions.has('axios')).toBe(false);
	});

	test('reports a stale nested copy inside the line', () => {
		const conflicts = findDynamicLineConflicts(
			{
				'node_modules/@dynamic-labs/logger': { version: '4.96.3' },
				'node_modules/viem/node_modules/@dynamic-labs/logger': { version: '4.96.1' },
				'node_modules/@dynamic-labs/message-transport': { version: '4.96.3' },
				'node_modules/foo/node_modules/@dynamic-labs/message-transport': { version: '4.96.1' },
				'node_modules/@dynamic-labs/global-wallet-client': { version: '4.96.3' }
			},
			'4.96.3'
		);

		expect(conflicts.map(([name]) => name)).toEqual(['@dynamic-labs/logger', '@dynamic-labs/message-transport']);
		expect(formatDynamicLineConflicts(conflicts)).toBe('@dynamic-labs/logger@{4.96.1, 4.96.3}, @dynamic-labs/message-transport@{4.96.1, 4.96.3}');
	});

	test('accepts unrelated major lines and independently versioned Dynamic packages', () => {
		expect(
			findDynamicLineConflicts(
				{
					'node_modules/@dynamic-labs/global-wallet-client': { version: '4.96.3' },
					'node_modules/@dynamic-labs/logger': { version: '4.96.3' },
					'node_modules/zksync-sso/node_modules/@dynamic-labs/logger': { version: '5.3.2' },
					'node_modules/@dynamic-labs/sdk-api-core': { version: '0.0.1093' },
					'node_modules/foo/node_modules/@dynamic-labs/sdk-api-core': { version: '0.12.0' }
				},
				'4.96.3'
			)
		).toEqual([]);
	});

	test('stays meaningful after a Dynamic major upgrade', () => {
		const packages = {
			'node_modules/@dynamic-labs/global-wallet-client': { version: '5.4.0' },
			'node_modules/@dynamic-labs/logger': { version: '5.4.0' },
			'node_modules/foo/node_modules/@dynamic-labs/logger': { version: '5.3.2' }
		};

		expect(findDynamicLineConflicts(packages, '5.4.0').map(([name]) => name)).toEqual(['@dynamic-labs/logger']);
		// The same graph read against the old line reports nothing, because 5.x is
		// no longer the runtime being checked.
		expect(findDynamicLineConflicts(packages, '4.96.3')).toEqual([]);
	});
});
