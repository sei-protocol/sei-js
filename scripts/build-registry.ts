import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build, type Plugin } from 'esbuild';
import { CHAIN_IDS } from '../packages/registry/src/supported-networks';
import { filterTokenList } from '../packages/registry/src/tokens/filter';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const packageDir = join(root, 'packages/registry');
const assetListFile = join(packageDir, 'community-assetlist/assetlist.json');
const networkDataFiles = new Set([join(packageDir, 'chain-registry/chains.json'), assetListFile]);
const supportedNetworks = Object.values(CHAIN_IDS);

const filterNetworkData: Plugin = {
	name: 'filter-registry-network-data',
	setup(context) {
		context.onLoad({ filter: /\.json$/ }, async ({ path }) => {
			if (!networkDataFiles.has(path)) {
				return;
			}

			const source = JSON.parse(await readFile(path, 'utf8')) as Record<string, unknown>;
			if (path === assetListFile) {
				return {
					contents: JSON.stringify(filterTokenList(source, path)),
					loader: 'json'
				};
			}

			const filtered = Object.fromEntries(
				supportedNetworks.map((network) => {
					const value = source[network];
					if (value === undefined) {
						throw new Error(`${path} is missing supported network ${network}`);
					}

					return [network, value];
				})
			);

			return {
				contents: JSON.stringify(filtered),
				loader: 'json'
			};
		});
	}
};

await build({
	absWorkingDir: packageDir,
	entryPoints: ['src/index.ts'],
	bundle: true,
	format: 'esm',
	platform: 'neutral',
	packages: 'external',
	target: 'es2020',
	outfile: 'dist/index.js',
	plugins: [filterNetworkData],
	logLevel: 'info'
});
