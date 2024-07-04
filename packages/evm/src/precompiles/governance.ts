/**
 * The address of the GOVERNANCE precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi
 * ```tsx
 * import { GOVERNANCE_PRECOMPILE_ADDRESS, GOVERNANCE_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useReadContract } from 'wagmi';
 **
 * const depositResponse = useContractFunction(
 *   GOVERNANCE_PRECOMPILE_ADDRESS,
 *   GOVERNANCE_PRECOMPILE_ABI,
 *   'deposit'
 * );
 * ```
 *
 * @example
 * ethers v6
 * ```tsx
 * import { getGovernancePrecompileEthersV6Contract, GOVERNANCE_PRECOMPILE_ADDRESS, parseSei } from '@sei-js/evm';
 * import { ethers } from 'ethers';
 *
 * const provider = new ethers.BrowserProvider(); // or any other provider
 * const signer = provider.getSigner();
 *
 * const governancePrecompileContract = getGovernancePrecompileEthersV6Contract(GOVERNANCE_PRECOMPILE_ADDRESS, signer);
 *
 * //Surround with try/catch for detailed errors
 * const depositResponse = await governancePrecompileContract.connect(signer).deposit('1', { value: parseSei(1) });
 * ```
 *
 * @category Cosmos Interoperability
 * */
export const GOVERNANCE_PRECOMPILE_ADDRESS: `0x${string}` = '0x0000000000000000000000000000000000001006';

/**
 * The ABI for the governance precompile contract, which can be used for interoperability between the EVM and Cosmos.
 *
 * @example
 * Wagmi
 * ```tsx
 * import { GOVERNANCE_PRECOMPILE_ADDRESS, GOVERNANCE_PRECOMPILE_ABI } from '@sei-js/evm';
 * import { useContractFunction } from '@wagmi/core';
 *
 * const depositResponse = useContractFunction(
 *   GOVERNANCE_PRECOMPILE_ADDRESS,
 *   GOVERNANCE_PRECOMPILE_ABI,
 *   'deposit'
 * );
 * ```
 *
 * @category Cosmos Interoperability
 * */
export const GOVERNANCE_PRECOMPILE_ABI = [
	{
		inputs: [{ internalType: 'uint64', name: 'proposalID', type: 'uint64' }],
		name: 'deposit',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint64', name: 'proposalID', type: 'uint64' },
			{ internalType: 'int32', name: 'option', type: 'int32' }
		],
		name: 'vote',
		outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
] as const;
