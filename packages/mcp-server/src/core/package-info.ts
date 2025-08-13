import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface PackageInfo {
	name: string;
	version: string;
	description: string;
}

let cachedPackageInfo: PackageInfo | null = null;

export const getPackageInfo = (): PackageInfo => {
	if (cachedPackageInfo) {
		return cachedPackageInfo;
	}

	try {
		// When compiled, we're in dist/esm/core/, so we need to go up 3 levels to reach package.json
		const packageJsonPath = join(__dirname, '../../../package.json');
		const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
		
		cachedPackageInfo = {
			name: packageJson.name || 'sei-mcp-server',
			version: packageJson.version || '0.0.0',
			description: packageJson.description || 'Sei MCP Server'
		};

		return cachedPackageInfo;
	} catch (error) {
		console.error('Failed to read package.json:', error);
		// Fallback values
		return {
			name: 'sei-mcp-server',
			version: '0.0.0',
			description: 'Sei MCP Server'
		};
	}
};
