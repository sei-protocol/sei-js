import { ARCTIC_1_EVM_CHAIN_ID } from '../chainInfo/chainInfo';

/**
 * Creates and returns a Wagmi Chain compatible with the provider needed for Wagmi.
 * @returns Wagmi Chain.
 * @category Wagmi
 */
export const ARCTIC_1_WAGMI_CHAIN = {
	id: ARCTIC_1_EVM_CHAIN_ID,
	name: 'Sei EVM Devnet',
	network: 'arctic-1',
	rpcUrls: {
		default: 'https://evm-rpc-arctic-1.sei-apis.com'
	}
};
