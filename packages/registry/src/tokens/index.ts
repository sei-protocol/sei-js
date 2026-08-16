import TokenListJSON from '../../community-assetlist/assetlist.json';
import { type Network, pickSupportedNetworks } from '../supported-networks';

interface AssetMetadata {
	base: string;
	denom_units: readonly {
		denom: string;
	}[];
	type_asset?: string;
}

const isIbcDenomination = (denomination: string): boolean => denomination.toLowerCase().startsWith('ibc/');

const isIbcAsset = (asset: AssetMetadata): boolean =>
	isIbcDenomination(asset.base) || asset.denom_units.some(({ denom }) => isIbcDenomination(denom)) || asset.type_asset?.toLowerCase() === 'ics20';

/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 */
export interface DenomUnit {
	/** denom represents the string name of the given denom unit (e.g. usei). */
	denom: string;
	/**
	 * exponent represents power of 10 exponent that one must
	 * raise the base_denom to in order to equal the given DenomUnit's denom
	 * 1 denom = 10^exponent base_denom
	 * (e.g. with a base_denom of usei, one can create a DenomUnit of 'sei' with
	 * exponent = 6, thus: 1 sei = 10^6 usei).
	 */
	exponent: number;
	/** aliases is an optional list of string aliases for the given denom */
	aliases?: string[];
}

/**
 * Defines the structure for a Sei token.
 */
export interface Token {
	/** The name of the token. */
	name: string;
	/** A description of the token. */
	description: string;
	/** The symbol representing the token. */
	symbol: string;
	/** The base denomination of the token. */
	base: string;
	/** The display denomination of the token for user interfaces. */
	display: string;
	/** An array of denomination units for the token. */
	denom_units: DenomUnit[];
	/** URLs to images representing the token, in PNG and SVG formats (optional). */
	images: {
		png?: string;
		svg?: string;
	};
	/** An optional identifier for the token on the CoinGecko platform. */
	coingecko_id?: string;
	/** The type of the token, if applicable (e.g., "cw20" for CosmWasm tokens). */
	type_asset?: string;
}

/**
 * A mapping of all supported Sei network names to their respective arrays of `Token` objects.
 */
type SeiTokens = {
	/** Each network name is associated with an array of `Token` objects. */
	[network in Network]: Token[];
};

/**
 * A constant that maps each Sei network to its respective tokens, imported from the community-run [asset list](https://github.com/Seitrace/sei-assetlist).
 *
 * @remarks
 * **Important**: This token list is community-driven and subject to change.
 * Always verify and filter tokens yourself before use in any production environment.
 *
 * @example
 * ```tsx
 * import { TOKEN_LIST } from '@sei-js/registry';
 *
 * const uSei = TOKEN_LIST['pacific-1'].find((asset) => asset.symbol === 'SEI');
 * ```
 */
const supportedTokenList = pickSupportedNetworks(TokenListJSON);

export const TOKEN_LIST: SeiTokens = Object.fromEntries(
	Object.entries(supportedTokenList).map(([network, assets]) => [network, assets.filter((asset) => !isIbcAsset(asset))])
) as unknown as SeiTokens;
