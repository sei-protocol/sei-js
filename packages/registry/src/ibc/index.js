import IBCInfoJSON from '../../chain-registry/ibc_info.json';
/**
 * A constant that holds the IBC channel information for each network, imported from the official Sei [chain-registry](https://github.com/sei-protocol/chain-registry)
 *
 * @example
 * ```tsx
 * import { IBCInfo } from '@sei-js/registry';
 *
 * const pacific1 = IBCInfo['pacific-1'].find((ibcInfo) => ibcInfo.counterparty_chain_name === 'cosmoshub-4');
 * ```
 */
export const IBCInfo = IBCInfoJSON;
