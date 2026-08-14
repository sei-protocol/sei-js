import { afterEach, describe, expect, it, jest } from 'bun:test';
import { getPackageInfo } from '../../server/package-info.js';

describe('getPackageInfo', () => {
	const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

	afterEach(() => {
		consoleErrorSpy.mockClear();
	});

	it('reads metadata from the package root', async () => {
		const packageJson = await Bun.file(new URL('../../../package.json', import.meta.url)).json();

		expect(getPackageInfo()).toEqual({
			name: packageJson.name,
			version: packageJson.version,
			description: packageJson.description
		});
		expect(consoleErrorSpy).not.toHaveBeenCalled();
	});
});
