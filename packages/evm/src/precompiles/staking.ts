import { ethers } from 'ethers';

interface StakingPrecompileFunctions {
	delegate(valAddress: string): Promise<{ success: boolean }>;
	redelegate(srcAddress: string, dstAddress: string, amount: ethers.BigNumberish): Promise<{ success: boolean }>;
	undelegate(valAddress: string, amount: ethers.BigNumberish): Promise<{ success: boolean }>;
}

type StakingPrecompileContract = ethers.Contract & StakingPrecompileFunctions;

/**
 * The address of the STAKING precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { ARCTIC_1_STAKING_PRECOMPILE_ADDRESS, STAKING_PRECOMPILE_ABI } from '@sei-js/evm';
 *
 * const ethersJSContract = new ethers.Contract(ARCTIC_1_STAKING_PRECOMPILE_ADDRESS, STAKING_PRECOMPILE_ABI, signer);
 * ```
 * @category Staking Precompile
 */
export const ARCTIC_1_STAKING_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001005';

/**
 * The ABI for the precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { ARCTIC_1_STAKING_PRECOMPILE_ADDRESS, STAKING_PRECOMPILE_ABI } from '@sei-js/evm';
 *
 * const ethersJSContract = new ethers.Contract(ARCTIC_1_STAKING_PRECOMPILE_ADDRESS, STAKING_PRECOMPILE_ABI, signer);
 * ```
 * @category Staking Precompile
 */
export const STAKING_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'string', name: 'valAddress', type: 'string' }],
		name: 'delegate',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'srcAddress', type: 'string' },
			{ internalType: 'string', name: 'dstAddress', type: 'string' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'redelegate',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'valAddress', type: 'string' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'undelegate',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
] as const;

/**
 * Creates and returns an ethers v6 contract instance with the provided signer, for use in interoperability between the EVM and Cosmos.
 *
 * @example
 * ```tsx
 * import { getStakingPrecompileEthersV6Contract, ARCTIC_1_STAKING_PRECOMPILE_ADDRESS } from '@sei-js/evm';
 *
 * const ethersContract = getStakingPrecompileEthersV6Contract(ARCTIC_1_STAKING_PRECOMPILE_ADDRESS);
 * ```
 * @param precompileAddress The 0X address of the precompile contract.
 * @param signer The ethersJS signer to be used with the contract.
 * @returns The typed contract instance allowing interaction with the precompile contract.
 * @category Staking Precompile
 */
export const getStakingPrecompileEthersV6Contract = (precompileAddress: `0x${string}`, signer: ethers.Signer): StakingPrecompileContract => {
	return new ethers.Contract(precompileAddress, STAKING_PRECOMPILE_ABI) as StakingPrecompileContract;
};
