import { ethers } from 'ethers';

export const ADDRESS_PRECOMPILE_ADDRESS = '0x0000000000000000000000000000000000001004';

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

interface AddressPrecompileFunctions {
	getEvmAddr(addr: string): Promise<{ response: string }>;
	getSeiAddr(addr: string): Promise<{ response: string }>;
}

type AddressPrecompileContract = ethers.Contract & AddressPrecompileFunctions;

export function getAddressPrecompileEthersV6Contract(signer: ethers.Signer): AddressPrecompileContract {
	return new ethers.Contract(ADDRESS_PRECOMPILE_ADDRESS, ADDRESS_PRECOMPILE_ABI, signer) as AddressPrecompileContract;
}
