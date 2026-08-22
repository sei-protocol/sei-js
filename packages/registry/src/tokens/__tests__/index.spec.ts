import AssetListJSON from '../../../community-assetlist/assetlist.json';
import { CHAIN_IDS, type Network } from '../../supported-networks';
import { filterTokenList, isIbcAsset, parseTokenList } from '../filter';
import { ASSET_TYPES, type DenomUnit, POINTER_CONTRACT_TYPES, TOKEN_LIST } from '../index';

const EXPECTED_SOURCE_COUNTS: Record<Network, number> = {
	[CHAIN_IDS.mainnet]: 53,
	[CHAIN_IDS.testnet]: 9
};

const EXPECTED_RETAINED_COUNTS: Record<Network, number> = {
	[CHAIN_IDS.mainnet]: 46,
	[CHAIN_IDS.testnet]: 7
};

const EXPECTED_CANONICAL_MAINNET_ASSETS = [
	{ label: 'WSEI', symbol: 'WSEI', base: '0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7', type_asset: 'erc20' },
	{ label: 'native USDC', symbol: 'USDC', base: '0xe15fC38F6D8c56aF07bbCBe3BAf5708A2Bf42392', type_asset: 'erc20' },
	{ label: 'USDT0', symbol: 'USDT', base: '0x9151434b16b9763660705744891fA906F660EcC5', type_asset: 'erc20' },
	{ label: 'Stargate WETH', symbol: 'WETH', base: '0x160345fC359604fC6e70E3c5fAcbdE5F7A9342d8', type_asset: 'erc20' },
	{ label: 'fastUSD', symbol: 'fastUSD', base: '0x37a4dD9CED2b19Cfe8FAC251cd727b5787E45269', type_asset: 'erc20' }
] as const;

describe('community asset list', () => {
	it('validates the reviewed upstream shape and pointer metadata', () => {
		const parsed = parseTokenList(AssetListJSON);
		let pointerContracts = 0;

		for (const [network, assets] of Object.entries(parsed)) {
			for (const [index, asset] of assets.entries()) {
				const path = `${network}[${index}]`;
				expect(typeof asset.name, path).toBe('string');
				expect(typeof asset.description, path).toBe('string');
				expect(typeof asset.symbol, path).toBe('string');
				expect(typeof asset.base, path).toBe('string');
				expect(typeof asset.display, path).toBe('string');
				expect(Array.isArray(asset.denom_units), path).toBeTrue();
				expect(ASSET_TYPES).toContain(asset.type_asset);

				for (const denomUnit of asset.denom_units) {
					expect(typeof denomUnit.denom, path).toBe('string');
					expect(Number.isInteger(denomUnit.exponent), path).toBeTrue();
				}

				if (asset.images.png !== undefined) expect(typeof asset.images.png, path).toBe('string');
				if (asset.images.svg !== undefined) expect(typeof asset.images.svg, path).toBe('string');
				if (asset.coingecko_id !== undefined) expect(typeof asset.coingecko_id, path).toBe('string');

				if (asset.pointer_contract !== undefined) {
					pointerContracts += 1;
					expect(typeof asset.pointer_contract.address, path).toBe('string');
					expect(POINTER_CONTRACT_TYPES).toContain(asset.pointer_contract.type_asset);
				}
			}
		}

		expect(pointerContracts).toBe(25);
		expect(
			Object.values(TOKEN_LIST)
				.flat()
				.filter(({ pointer_contract }) => pointer_contract !== undefined)
		).toHaveLength(18);
	});

	it('does not apply the reviewed non-fungible denomination exception to fungible assets', () => {
		const malformed = {
			[CHAIN_IDS.mainnet]: [
				{
					name: 'Malformed fungible token',
					description: 'Fixture',
					symbol: 'BAD',
					base: 'ubad',
					display: 'bad',
					denom_units: [],
					images: {},
					type_asset: 'sdk.coin'
				}
			]
		};

		expect(() => parseTokenList(malformed)).toThrow('denom_units must contain two units');
	});

	it('retains only supported networks with reviewed source and runtime counts', () => {
		const supportedNetworks: Network[] = [CHAIN_IDS.mainnet, CHAIN_IDS.testnet];
		expect(Object.keys(TOKEN_LIST)).toEqual(supportedNetworks);

		for (const network of supportedNetworks) {
			expect(AssetListJSON[network]).toHaveLength(EXPECTED_SOURCE_COUNTS[network]);
			expect(TOKEN_LIST[network]).toHaveLength(EXPECTED_RETAINED_COUNTS[network]);
		}
	});

	it('uses the same deterministic filter for source and runtime data', () => {
		expect(TOKEN_LIST).toEqual(filterTokenList(AssetListJSON));
	});

	it('excludes every IBC denomination and ICS-20 asset', () => {
		for (const assets of Object.values(TOKEN_LIST)) {
			for (const asset of assets) {
				expect(isIbcAsset(asset), `${asset.symbol}: ${asset.base}`).toBeFalse();
			}
		}
	});

	it('retains reviewed canonical mainnet assets', () => {
		for (const expected of EXPECTED_CANONICAL_MAINNET_ASSETS) {
			const asset = TOKEN_LIST[CHAIN_IDS.mainnet].find(({ base }) => base === expected.base);
			expect(asset, expected.label).toBeDefined();
			expect(asset?.symbol, expected.label).toBe(expected.symbol);
			expect(asset?.type_asset, expected.label).toBe(expected.type_asset);
		}
	});

	it('retains non-IBC NFT metadata even when denomination units do not apply', () => {
		const nft = TOKEN_LIST[CHAIN_IDS.mainnet].find(({ base }) => base === '0x1F963C268e711d09f7A9173532665d9c4491120A');
		expect(nft?.symbol).toBe('foruaigenesis');
		expect(nft?.type_asset).toBe('erc721');
		expect(nft?.denom_units).toEqual([]);
	});

	it('retains the reviewed image metadata without malformed URLs', () => {
		const urls = new Set(
			Object.values(TOKEN_LIST).flatMap((assets) => assets.flatMap(({ images }) => [images.png, images.svg].filter((url): url is string => url !== undefined)))
		);

		expect(urls.size).toBe(48);
		for (const url of urls) {
			expect(url).toMatch(/^https:\/\/.+/);
		}
	});
});

it('contains the native SEI asset on each supported network', () => {
	for (const network of Object.keys(TOKEN_LIST) as Network[]) {
		const seiAsset = TOKEN_LIST[network].find((asset) => asset.symbol === 'SEI');
		expect(seiAsset).toBeDefined();
		expect(seiAsset?.name).toBe('Sei');
		expect(seiAsset?.description).toBe('The native token of Sei');
		expect(seiAsset?.base).toBe('usei');
		expect(seiAsset?.denom_units.some((unit: DenomUnit) => unit.denom === 'sei' && unit.exponent === 6)).toBeTrue();
		expect(seiAsset?.images.png).toMatch(/^https?:\/\/.+/);
	}
});
