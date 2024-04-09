import WalletsJSON from '../../chain-registry/wallets.json';

/**
 * Defines the supported capabilities of a wallet, categorizing it by its compatibility
 * with either native functionality or EVM (Ethereum Virtual Machine) based interactions.
 */
type Capability = 'native' | 'evm';

/**
 * Describes the structure and capabilities of a wallet,
 * providing essential information such as its name, unique identifier, and supported functions.
 */
export interface Wallet {
	/**
	 * The name of the wallet.
	 */
	name: string;
	/**
	 * A unique identifier for the wallet, used for referencing in code or configurations.
	 */
	identifier: string;
	/**
	 * The URL to the wallet's icon image, providing a visual representation of the wallet.
	 */
	icon: string;
	/**
	 * The official website or landing page URL of the wallet, where users can find more information or download the wallet.
	 */
	url: string;
	/**
	 * An array of capabilities supported by the wallet, indicating whether it supports native blockchain functions, EVM-based interactions, or both.
	 */
	capabilities: Capability[];
}

/**
 * A constant holding the collection of wallet extensions, imported from the official Sei [chain-registry](https://github.com/sei-protocol/chain-registry).
 *
 * @example
 * ```tsx
 * import { WALLETS } from '@sei-js/registry';
 *
 * const compass = WALLETS.find((wallet) => wallet.identifier === 'compass');
 * ```
 */
export const WALLETS: Wallet[] = WalletsJSON.extensions as Wallet[];
