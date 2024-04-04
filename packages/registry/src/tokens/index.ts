import TokenListJSON from '../../community-assetlist/assetlist.json';
import { Network } from '../index';
import { DenomUnit } from '@sei-js/proto/types/cosmos/bank/v1beta1/bank';

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
	type_token?: string;
}

/**
 * A mapping of all supported Sei network names to their respective arrays of `Token` objects.
 */
type SeiTokens = {
	/** Each network name is associated with an array of `Token` objects. */
	[network in Network]: Token[];
};

/**
 * A constant that maps each Sei networks to its respective tokens, imported from the community ran [assetlist](https://github.com/Sei-Public-Goods/sei-assetlist).
 *
 * @remarks
 * **Important**: This token list is community-driven and subject to change.
 * Always verify and filter tokens yourself before use in any production environment.
 *
 * @example
 * ```tsx
 * import { TokenList } from '@sei-js/registry';
 *
 * const uSei = TokenList['pacific-1'].find((asset) => asset.symbol === 'sei');
 * ```
 */
export const TokenList: SeiTokens = TokenListJSON as unknown as SeiTokens;
