import { describe, expect, test } from 'bun:test';
import { findStaleDynamicPackages, isDynamicLabsLockLocation, STALE_DYNAMIC_VERSION } from './dynamic-package-lock.js';

describe('dynamic package lock locations', () => {
	test('matches hoisted and nested Dynamic packages', () => {
		expect(isDynamicLabsLockLocation('node_modules/@dynamic-labs/logger')).toBe(true);
		expect(isDynamicLabsLockLocation('node_modules/@dynamic-labs/global-wallet-client')).toBe(true);
		expect(isDynamicLabsLockLocation('node_modules/foo/node_modules/@dynamic-labs/logger')).toBe(true);
		expect(isDynamicLabsLockLocation('node_modules/@dynamic-labs')).toBe(false);
		expect(isDynamicLabsLockLocation('node_modules/axios')).toBe(false);
	});

	test('rejects stale 4.96.1 copies at the top level and when nested', () => {
		const stale = findStaleDynamicPackages({
			'node_modules/@dynamic-labs/logger': { version: STALE_DYNAMIC_VERSION },
			'node_modules/@dynamic-labs/global-wallet-client': { version: '4.96.3' },
			'node_modules/viem/node_modules/@dynamic-labs/message-transport': { version: STALE_DYNAMIC_VERSION },
			'node_modules/axios': { version: STALE_DYNAMIC_VERSION }
		});

		expect(stale.map(([location]) => location).sort()).toEqual([
			'node_modules/@dynamic-labs/logger',
			'node_modules/viem/node_modules/@dynamic-labs/message-transport'
		]);
	});
});
