import GasInfoJSON from '../../chain-registry/gas.json';
import { type Network, pickSupportedNetworks } from '../supported-networks';

/**
 * Represents the gas information for a specific Sei network,
 * including the fee denomination and default minimum gas price.
 */
export interface ChainGasInfo {
	/** The denomination of the gas fee. */
	denom: string;
	/** The minimum gas price required for transactions on the network. */
	min_gas_price: number;
}

/**
 * A mapping of network identifiers (chain id's) to their respective gas information.
 */
type GasInfo = {
	/** Each network identifier is associated with its gas information. */
	[network in Network]: ChainGasInfo;
};

/**
 * A constant holding the gas information for each official Sei network, imported from the official Sei [chain-registry](https://github.com/sei-protocol/chain-registry).
 * This includes the gas denomination and minimum gas price.
 *
 * @example
 * ```tsx
 * import { GAS_INFO } from '@sei-js/registry';
 *
 * const pacific1Info = GAS_INFO['pacific-1'];
 * console.log(pacific1Info.denom); // 'usei'
 * ```
 */
export const GAS_INFO: GasInfo = pickSupportedNetworks(GasInfoJSON);
