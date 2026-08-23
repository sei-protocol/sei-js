import type { Network } from '../supported-networks';

/**
 * Asset kinds supported by the reviewed community asset-list schema.
 */
export const ASSET_TYPES = ['sdk.coin', 'ics20', 'cw20', 'cw721', 'erc20', 'erc721', 'erc1155', 'erc404'] as const;

export type AssetType = (typeof ASSET_TYPES)[number];

/**
 * Contract kinds supported for pointers between Sei's native and EVM runtimes.
 */
export const POINTER_CONTRACT_TYPES = ['cw20', 'erc20'] as const;

export type PointerContractType = (typeof POINTER_CONTRACT_TYPES)[number];

/**
 * DenomUnit describes one denomination of an asset.
 */
export interface DenomUnit {
	/** The string name of the denomination (for example, `usei`). */
	denom: string;
	/**
	 * The power-of-ten relationship to the base denomination. For example,
	 * `sei` has exponent 6 because 1 SEI equals 10^6 usei.
	 */
	exponent: number;
	/** Optional aliases retained for compatibility with registry consumers. */
	aliases?: string[];
}

export interface TokenImages {
	png?: string;
	svg?: string;
}

export interface PointerContract {
	/** Address of the contract pointing to this asset in the other runtime. */
	address: string;
	/** Runtime contract standard used by the pointer. */
	type_asset: PointerContractType;
}

/**
 * Metadata for one asset in the reviewed Sei community asset list.
 */
export interface Token {
	name: string;
	description: string;
	symbol: string;
	base: string;
	display: string;
	denom_units: DenomUnit[];
	images: TokenImages;
	coingecko_id?: string;
	type_asset?: string;
	/** Optional native/EVM pointer metadata supplied by the upstream registry. */
	pointer_contract?: PointerContract;
}

/**
 * A token validated from the current upstream schema.
 */
export interface RegistryToken extends Token {
	type_asset: AssetType;
}

/**
 * Assets retained for each network supported by this package.
 */
export type SeiTokenList = {
	[network in Network]: RegistryToken[];
};
