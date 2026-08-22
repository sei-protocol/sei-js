import TokenListJSON from '../../community-assetlist/assetlist.json';
import { filterTokenList } from './filter';
import type { SeiTokenList } from './types';

export type {
	AssetType,
	DenomUnit,
	PointerContract,
	PointerContractType,
	RegistryToken,
	SeiTokenList,
	Token,
	TokenImages
} from './types';
export { ASSET_TYPES, POINTER_CONTRACT_TYPES } from './types';

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
export const TOKEN_LIST: SeiTokenList = filterTokenList(TokenListJSON, 'community-assetlist/assetlist.json');
