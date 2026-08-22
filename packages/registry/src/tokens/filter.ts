import { CHAIN_IDS, type Network } from '../supported-networks';
import {
	ASSET_TYPES,
	type AssetType,
	POINTER_CONTRACT_TYPES,
	type PointerContract,
	type PointerContractType,
	type RegistryToken,
	type SeiTokenList,
	type TokenImages
} from './types';

const ASSET_TYPE_SET: ReadonlySet<string> = new Set(ASSET_TYPES);
const POINTER_CONTRACT_TYPE_SET: ReadonlySet<string> = new Set(POINTER_CONTRACT_TYPES);
const NON_FUNGIBLE_ASSET_TYPES: ReadonlySet<AssetType> = new Set(['cw721', 'erc721', 'erc1155']);
const TOKEN_KEYS = new Set(['name', 'description', 'symbol', 'base', 'display', 'denom_units', 'images', 'coingecko_id', 'type_asset', 'pointer_contract']);

function assert(condition: unknown, message: string): asserts condition {
	if (!condition) {
		throw new TypeError(message);
	}
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function assertOnlyKeys(value: Record<string, unknown>, allowedKeys: ReadonlySet<string>, path: string): void {
	for (const key of Object.keys(value)) {
		assert(allowedKeys.has(key), `${path} contains unsupported property "${key}"`);
	}
}

function requiredString(value: Record<string, unknown>, key: string, path: string): string {
	const field = value[key];
	assert(typeof field === 'string', `${path}.${key} must be a string`);
	return field;
}

function isAssetType(value: string): value is AssetType {
	return ASSET_TYPE_SET.has(value);
}

function isPointerContractType(value: string): value is PointerContractType {
	return POINTER_CONTRACT_TYPE_SET.has(value);
}

function parseImages(value: unknown, path: string): TokenImages {
	assert(isRecord(value), `${path} must be an object`);
	assertOnlyKeys(value, new Set(['png', 'svg']), path);
	const images: TokenImages = {};

	if (value.png !== undefined) {
		assert(typeof value.png === 'string', `${path}.png must be a string`);
		images.png = value.png;
	}
	if (value.svg !== undefined) {
		assert(typeof value.svg === 'string', `${path}.svg must be a string`);
		images.svg = value.svg;
	}

	return images;
}

function parsePointerContract(value: unknown, path: string): PointerContract {
	assert(isRecord(value), `${path} must be an object`);
	assertOnlyKeys(value, new Set(['address', 'type_asset']), path);
	assert(typeof value.address === 'string', `${path}.address must be a string`);
	assert(typeof value.type_asset === 'string' && isPointerContractType(value.type_asset), `${path}.type_asset is unsupported`);

	return {
		address: value.address,
		type_asset: value.type_asset
	};
}

function parseToken(value: unknown, path: string): RegistryToken {
	assert(isRecord(value), `${path} must be an object`);
	assertOnlyKeys(value, TOKEN_KEYS, path);

	const name = requiredString(value, 'name', path);
	const description = requiredString(value, 'description', path);
	const symbol = requiredString(value, 'symbol', path);
	const base = requiredString(value, 'base', path);
	const display = requiredString(value, 'display', path);
	const typeAsset = value.type_asset;
	assert(typeof typeAsset === 'string' && isAssetType(typeAsset), `${path}.type_asset is unsupported`);

	assert(Array.isArray(value.denom_units), `${path}.denom_units must be an array`);
	assert(
		value.denom_units.length === 2 || (value.denom_units.length === 0 && NON_FUNGIBLE_ASSET_TYPES.has(typeAsset)),
		`${path}.denom_units must contain two units, or be empty for a non-fungible asset`
	);
	const denomUnits = value.denom_units.map((unit, index) => {
		const unitPath = `${path}.denom_units[${index}]`;
		assert(isRecord(unit), `${unitPath} must be an object`);
		assertOnlyKeys(unit, new Set(['denom', 'exponent']), unitPath);
		assert(typeof unit.denom === 'string', `${unitPath}.denom must be a string`);
		assert(Number.isInteger(unit.exponent) && Number(unit.exponent) >= 0, `${unitPath}.exponent must be a non-negative integer`);
		if (index === 0) {
			assert(unit.exponent === 0, `${unitPath}.exponent must be 0 for the base denomination`);
		}

		return {
			denom: unit.denom,
			exponent: Number(unit.exponent)
		};
	});

	const images = parseImages(value.images, `${path}.images`);

	if (value.coingecko_id !== undefined) {
		assert(typeof value.coingecko_id === 'string', `${path}.coingecko_id must be a string`);
	}

	return {
		name,
		description,
		symbol,
		base,
		display,
		denom_units: denomUnits,
		images,
		type_asset: typeAsset,
		...(value.coingecko_id === undefined ? {} : { coingecko_id: value.coingecko_id }),
		...(value.pointer_contract === undefined ? {} : { pointer_contract: parsePointerContract(value.pointer_contract, `${path}.pointer_contract`) })
	};
}

/**
 * Validate the checked-in community asset list against the public token shape.
 */
export function parseTokenList(source: unknown, sourceName = 'asset list'): Record<string, RegistryToken[]> {
	assert(isRecord(source), `${sourceName} must be an object`);

	return Object.fromEntries(
		Object.entries(source).map(([network, assets]) => {
			assert(Array.isArray(assets), `${sourceName}.${network} must be an array`);
			return [network, assets.map((asset, index) => parseToken(asset, `${sourceName}.${network}[${index}]`))];
		})
	);
}

export function isIbcDenomination(denomination: string): boolean {
	return denomination.toLowerCase().startsWith('ibc/');
}

export function isIbcAsset(asset: Pick<RegistryToken, 'base' | 'denom_units' | 'type_asset'>): boolean {
	return isIbcDenomination(asset.base) || asset.denom_units.some(({ denom }) => isIbcDenomination(denom)) || asset.type_asset.toLowerCase() === 'ics20';
}

function retainedAssets(source: Record<string, RegistryToken[]>, network: Network, sourceName: string): RegistryToken[] {
	const assets = source[network];
	assert(assets !== undefined, `${sourceName} is missing supported network ${network}`);
	return assets.filter((asset) => !isIbcAsset(asset));
}

/**
 * Validate, select supported networks, and remove IBC/ICS-20 assets.
 *
 * This function is shared by the source module and the package bundler so the
 * runtime and generated-artifact policies cannot drift.
 */
export function filterTokenList(source: unknown, sourceName = 'asset list'): SeiTokenList {
	const parsed = parseTokenList(source, sourceName);

	return {
		[CHAIN_IDS.mainnet]: retainedAssets(parsed, CHAIN_IDS.mainnet, sourceName),
		[CHAIN_IDS.testnet]: retainedAssets(parsed, CHAIN_IDS.testnet, sourceName)
	};
}
