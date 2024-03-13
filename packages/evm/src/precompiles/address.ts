import { ethers } from 'ethers';
import { getContract, GetContractReturnType } from 'viem';

interface AddressPrecompileFunctions {
	getEvmAddr(addr: string): Promise<{ response: string }>;
	getSeiAddr(addr: string): Promise<{ response: string }>;
}

type AddressPrecompileContract = ethers.Contract & AddressPrecompileFunctions;

/**
 * @category Address Precompile
 */
export const ARCTIC_1_ADDRESS_PRECOMPILE_ADDRESS = '0x0000000000000000000000000000000000001004';

/**
 * The ABI for the precompile contract.
 * @category Address Precompile
 */
export const ADDRESS_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'string', name: 'addr', type: 'string' }],
		name: 'getEvmAddr',
		outputs: [{ internalType: 'address', name: 'response', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'addr', type: 'address' }],
		name: 'getSeiAddr',
		outputs: [{ internalType: 'string', name: 'response', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	}
];

/**
 * Creates and returns an `AddressPrecompileContract` instance with the provided signer.
 * @param precompileAddress The 0X address of the precompile contract.
 * @param signer The ethersJS signer to be used with the contract.
 * @returns The typed contract instance allowing interaction with the ADDRESS precompile contract.
 * @category Address Precompile
 */
export function getAddressPrecompileEthersV6Contract(precompileAddress: `0x${string}`, signer: ethers.Signer): AddressPrecompileContract {
	return new ethers.Contract(precompileAddress, ADDRESS_PRECOMPILE_ABI, signer) as AddressPrecompileContract;
}

/**
 * Creates and returns a Viem contract instance with the default public and wallet signing.
 * @param address The 0X address of the precompile contract.
 * @param viemPublicClient The Viem public client instance.
 * @param viemWalletClient The Viem wallet client instance.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Address Precompile
 */
export const getAddressPrecompileViemContract = (address: `0x${string}`, viemPublicClient: any, viemWalletClient: any): GetContractReturnType<any, any, any> => {
	const contractParams = {
		address,
		abi: ADDRESS_PRECOMPILE_ABI,
		client: {
			public: viemPublicClient,
			wallet: viemWalletClient
		}
	};

	return getContract(contractParams);
};
