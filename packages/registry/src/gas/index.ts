import GasInfoJSON from '../../chain-registry/gas.json';
import { Network } from '../index';

/**
 * Defines the gas price adjustments for specific modules within the Sei blockchain,
 * allowing for differentiated gas pricing based on transaction type.
 */
export interface ModuleAdjustments {
	/** Adjustments specifically for decentralized exchange (DEX) transactions. */
	dex: {
		/** The sudo (superuser) gas price for critical operations. */
		sudo_gas_price: number;
		/** The gas price for placing orders on the DEX. */
		order_placement: number;
		/** The gas price for canceling orders on the DEX. */
		order_cancellation: number;
	};
}

/**
 * Represents the gas information for a specific Sei network,
 * including the default minimum gas price and module-specific adjustments.
 */
export interface ChainGasInfo {
	/** The denomination of the gas fee. */
	denom: string;
	/** The minimum gas price required for transactions on the network. */
	min_gas_price: number;
	/** Gas price adjustments for specific modules. */
	module_adjustments: ModuleAdjustments;
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
 * This includes details such as the gas denomination, minimum gas price, and module-specific adjustments.
 *
 * @example
 * ```tsx
 * import { GAS_INFO } from '@sei-js/registry';
 *
 * const pacific1Info = GAS_INFO['pacific-1'];
 * console.log(pacific1Info.denom); // 'usei'
 * ```
 */
export const GAS_INFO: GasInfo = GasInfoJSON as GasInfo;
