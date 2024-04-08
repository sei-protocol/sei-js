import TokenListJSON from '../../community-assetlist/assetlist.json';
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
export const TokenList = TokenListJSON;
