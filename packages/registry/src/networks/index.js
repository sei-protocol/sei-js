import NetworksJSON from '../../chain-registry/chains.json';
/**
 * A constant holding the network configurations for each network, imported from the official Sei [chain-registry](https://github.com/sei-protocol/chain-registry)
 *
 * @example
 * ```tsx
 * import { Networks } from '@sei-js/registry';
 *
 * const pacific1 = Networks.find((network) => network.chainId === 'pacific-1');
 * ```
 */
export const Networks = NetworksJSON;
