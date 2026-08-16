import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build, type Plugin } from 'esbuild';
import { CHAIN_IDS } from '../packages/registry/src/supported-networks';

interface RegistryAssetMetadata {
	base: string;
	denom_units: readonly {
		denom: string;
	}[];
	type_asset?: string;
}

const isIbcDenomination = (denomination: string): boolean => denomination.toLowerCase().startsWith('ibc/');

const isIbcAsset = (asset: RegistryAssetMetadata): boolean =>
	isIbcDenomination(asset.base) || asset.denom_units.some(({ denom }) => isIbcDenomination(denom)) || asset.type_asset?.toLowerCase() === 'ics20';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const packageDir = join(root, 'packages/registry');
const assetListFile = join(packageDir, 'community-assetlist/assetlist.json');
const networkDataFiles = new Set([join(packageDir, 'chain-registry/chains.json'), join(packageDir, 'chain-registry/gas.json'), assetListFile]);
const supportedNetworks = Object.values(CHAIN_IDS);

const filterNetworkData: Plugin = {
	name: 'filter-registry-network-data',
	setup(context) {
		context.onLoad({ filter: /\.json$/ }, async ({ path }) => {
			if (!networkDataFiles.has(path)) {
				return;
			}

			const source = JSON.parse(await readFile(path, 'utf8')) as Record<string, unknown>;
			const filtered = Object.fromEntries(
				supportedNetworks.map((network) => {
					const value = source[network];
					if (value === undefined) {
						throw new Error(`${path} is missing supported network ${network}`);
					}

					if (path === assetListFile) {
						if (!Array.isArray(value)) {
							throw new Error(`${path} must contain an asset array for supported network ${network}`);
						}

						return [network, value.filter((asset) => !isIbcAsset(asset as RegistryAssetMetadata))];
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
