import ChainInfoJSON from '../../chain-registry/chain_info.json';
/**
 * A constant that holds the chain information, imported from the official Sei [chain-registry](https://github.com/sei-protocol/chain-registry).
 *
 * @example
 * ```tsx
 * import { ChainInfo } from '@sei-js/registry';
 *
 * console.log(ChainInfo.bech32_prefix); // 'sei'
 * ```
 */
export const ChainInfo = ChainInfoJSON;
