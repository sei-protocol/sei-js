import { describe, it, expect } from 'vitest';
import { getPackageInfo } from '../package-info.js';

describe('getPackageInfo', () => {
	it('should read package info from package.json', () => {
		const packageInfo = getPackageInfo();
		
		expect(packageInfo).toBeDefined();
		expect(packageInfo.name).toBe('@sei-js/mcp-server');
		expect(packageInfo.version).toMatch(/^\d+\.\d+\.\d+$/); // Semantic version format
		expect(packageInfo.description).toContain('Model Context Protocol');
	});

	it('should cache package info on subsequent calls', () => {
		const first = getPackageInfo();
		const second = getPackageInfo();
		
		expect(first).toBe(second); // Same object reference (cached)
	});
});
