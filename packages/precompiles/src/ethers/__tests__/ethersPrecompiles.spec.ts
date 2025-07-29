import { Contract, type ContractRunner, type InterfaceAbi } from 'ethers';

import {
	ETHERS_ADDRESS_PRECOMPILE_ABI,
	ETHERS_BANK_PRECOMPILE_ABI,
	ETHERS_DISTRIBUTION_PRECOMPILE_ABI,
	ETHERS_GOVERNANCE_PRECOMPILE_ABI,
	ETHERS_IBC_PRECOMPILE_ABI,
	ETHERS_JSON_PRECOMPILE_ABI,
	ETHERS_ORACLE_PRECOMPILE_ABI,
	ETHERS_POINTERVIEW_PRECOMPILE_ABI,
	ETHERS_POINTER_PRECOMPILE_ABI,
	ETHERS_STAKING_PRECOMPILE_ABI,
	ETHERS_WASM_PRECOMPILE_ABI,
	getAddressPrecompileEthersV6Contract,
	getBankPrecompileEthersV6Contract,
	getDistributionPrecompileEthersV6Contract,
	getGovernancePrecompileEthersV6Contract,
	getIbcPrecompileEthersV6Contract,
	getJSONPrecompileEthersV6Contract,
	getOraclePrecompileEthersV6Contract,
	getPointerPrecompileEthersV6Contract,
	getPointerviewPrecompileEthersV6Contract,
	getStakingPrecompileEthersV6Contract,
	getWasmPrecompileEthersV6Contract
} from '../';

import {
	ADDRESS_PRECOMPILE_ABI,
	ADDRESS_PRECOMPILE_ADDRESS,
	BANK_PRECOMPILE_ABI,
	BANK_PRECOMPILE_ADDRESS,
	DISTRIBUTION_PRECOMPILE_ABI,
	DISTRIBUTION_PRECOMPILE_ADDRESS,
	GOVERNANCE_PRECOMPILE_ABI,
	GOVERNANCE_PRECOMPILE_ADDRESS,
	IBC_PRECOMPILE_ABI,
	IBC_PRECOMPILE_ADDRESS,
	JSON_PRECOMPILE_ABI,
	JSON_PRECOMPILE_ADDRESS,
	ORACLE_PRECOMPILE_ABI,
	ORACLE_PRECOMPILE_ADDRESS,
	POINTERVIEW_PRECOMPILE_ABI,
	POINTERVIEW_PRECOMPILE_ADDRESS,
	POINTER_PRECOMPILE_ABI,
	POINTER_PRECOMPILE_ADDRESS,
	SOLO_PRECOMPILE_ABI,
	SOLO_PRECOMPILE_ADDRESS,
	STAKING_PRECOMPILE_ABI,
	STAKING_PRECOMPILE_ADDRESS,
	WASM_PRECOMPILE_ABI,
	WASM_PRECOMPILE_ADDRESS
} from '../../precompiles';
import { ETHERS_SOLO_PRECOMPILE_ABI, getSoloPrecompileEthersV6Contract } from '../soloPrecompile';

const FACTORIES: [string, string, InterfaceAbi, unknown, (runner: ContractRunner) => Contract][] = [
	['ADDRESS', ADDRESS_PRECOMPILE_ADDRESS, ADDRESS_PRECOMPILE_ABI, ETHERS_ADDRESS_PRECOMPILE_ABI, getAddressPrecompileEthersV6Contract],
	['BANK', BANK_PRECOMPILE_ADDRESS, BANK_PRECOMPILE_ABI, ETHERS_BANK_PRECOMPILE_ABI, getBankPrecompileEthersV6Contract],
	['DISTRIBUTION', DISTRIBUTION_PRECOMPILE_ADDRESS, DISTRIBUTION_PRECOMPILE_ABI, ETHERS_DISTRIBUTION_PRECOMPILE_ABI, getDistributionPrecompileEthersV6Contract],
	['GOVERNANCE', GOVERNANCE_PRECOMPILE_ADDRESS, GOVERNANCE_PRECOMPILE_ABI, ETHERS_GOVERNANCE_PRECOMPILE_ABI, getGovernancePrecompileEthersV6Contract],
	['IBC', IBC_PRECOMPILE_ADDRESS, IBC_PRECOMPILE_ABI, ETHERS_IBC_PRECOMPILE_ABI, getIbcPrecompileEthersV6Contract],
	['JSON', JSON_PRECOMPILE_ADDRESS, JSON_PRECOMPILE_ABI, ETHERS_JSON_PRECOMPILE_ABI, getJSONPrecompileEthersV6Contract],
	['ORACLE', ORACLE_PRECOMPILE_ADDRESS, ORACLE_PRECOMPILE_ABI, ETHERS_ORACLE_PRECOMPILE_ABI, getOraclePrecompileEthersV6Contract],
	['POINTER', POINTER_PRECOMPILE_ADDRESS, POINTER_PRECOMPILE_ABI, ETHERS_POINTER_PRECOMPILE_ABI, getPointerPrecompileEthersV6Contract],
	['POINTERVIEW', POINTERVIEW_PRECOMPILE_ADDRESS, POINTERVIEW_PRECOMPILE_ABI, ETHERS_POINTERVIEW_PRECOMPILE_ABI, getPointerviewPrecompileEthersV6Contract],
	['SOLO', SOLO_PRECOMPILE_ADDRESS, SOLO_PRECOMPILE_ABI, ETHERS_SOLO_PRECOMPILE_ABI, getSoloPrecompileEthersV6Contract],
	['STAKING', STAKING_PRECOMPILE_ADDRESS, STAKING_PRECOMPILE_ABI, ETHERS_STAKING_PRECOMPILE_ABI, getStakingPrecompileEthersV6Contract],
	['WASM', WASM_PRECOMPILE_ADDRESS, WASM_PRECOMPILE_ABI, ETHERS_WASM_PRECOMPILE_ABI, getWasmPrecompileEthersV6Contract]
];

describe('Ethers Precompile Contract Exports', () => {
	const mockRunner = {} as unknown as ContractRunner;

	it.each(FACTORIES)('%s precompile ABI and factory should be correctly exported', (_name, address, rawAbi, typedAbi, factory) => {
		// ABI checks
		expect(typedAbi).toBe(rawAbi);
		expect(typedAbi).toEqual(rawAbi);

		// Factory contract check
		const contract = factory(mockRunner);
		expect(contract).toBeInstanceOf(Contract);
		expect(contract.target).toEqual(address);
		expect(contract.interface.fragments).toEqual(new Contract(address, rawAbi, mockRunner).interface.fragments);
	});
});
