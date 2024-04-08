import GasInfoJSON from '../../chain-registry/gas.json';
/**
 * A constant holding the gas information for each official Sei network, imported from the official Sei [chain-registry](https://github.com/sei-protocol/chain-registry).
 * This includes details such as the gas denomination, minimum gas price, and module-specific adjustments.
 *
 * @example
 * ```tsx
 * import { GasInfo } from '@sei-js/registry';
 *
 * const pacific1Info = GasInfo['pacific-1'];
 * console.log(pacific1Info.denom); // 'usei'
 * ```
 */
export const GasInfo = GasInfoJSON;
