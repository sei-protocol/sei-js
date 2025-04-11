import type { Abi } from 'viem';
import {
	ADDRESS_PRECOMPILE_ABI,
	BANK_PRECOMPILE_ABI,
	CONFIDENTIAL_TRANSFERS_PRECOMPILE_ABI,
	DISTRIBUTION_PRECOMPILE_ABI,
	GOVERNANCE_PRECOMPILE_ABI,
	IBC_PRECOMPILE_ABI,
	JSON_PRECOMPILE_ABI,
	ORACLE_PRECOMPILE_ABI,
	POINTERVIEW_PRECOMPILE_ABI,
	POINTER_PRECOMPILE_ABI,
	STAKING_PRECOMPILE_ABI,
	WASM_PRECOMPILE_ABI
} from '../../precompiles';

import {
	VIEM_ADDRESS_PRECOMPILE_ABI,
	VIEM_BANK_PRECOMPILE_ABI,
	VIEM_CONFIDENTIAL_TRANSFERS_PRECOMPILE_ABI,
	VIEM_DISTRIBUTION_PRECOMPILE_ABI,
	VIEM_GOVERNANCE_PRECOMPILE_ABI,
	VIEM_IBC_PRECOMPILE_ABI,
	VIEM_JSON_PRECOMPILE_ABI,
	VIEM_ORACLE_PRECOMPILE_ABI,
	VIEM_POINTERVIEW_PRECOMPILE_ABI,
	VIEM_POINTER_PRECOMPILE_ABI,
	VIEM_STAKING_PRECOMPILE_ABI,
	VIEM_WASM_PRECOMPILE_ABI
} from '../';

const PRECOMPILE_VIEM_ABIS: [string, Abi][] = [
	['ADDRESS', ADDRESS_PRECOMPILE_ABI as Abi],
	['BANK', BANK_PRECOMPILE_ABI as Abi],
	['CONFIDENTIAL_TRANSFERS', CONFIDENTIAL_TRANSFERS_PRECOMPILE_ABI as Abi],
	['DISTRIBUTION', DISTRIBUTION_PRECOMPILE_ABI as Abi],
	['GOVERNANCE', GOVERNANCE_PRECOMPILE_ABI as Abi],
	['IBC', IBC_PRECOMPILE_ABI as Abi],
	['JSON', JSON_PRECOMPILE_ABI as Abi],
	['ORACLE', ORACLE_PRECOMPILE_ABI as Abi],
	['POINTER', POINTER_PRECOMPILE_ABI as Abi],
	['POINTERVIEW', POINTERVIEW_PRECOMPILE_ABI as Abi],
	['STAKING', STAKING_PRECOMPILE_ABI as Abi],
	['WASM', WASM_PRECOMPILE_ABI as Abi]
];

describe('Viem precompile ABIs', () => {
	it.each(PRECOMPILE_VIEM_ABIS)('%s ABI should be a valid Viem Abi array', (_name, abi) => {
		expect(Array.isArray(abi)).toBe(true);
		for (const entry of abi) {
			expect(entry).toHaveProperty('type');
		}
	});
});

const ABI_PAIRS: [string, Abi, Abi][] = [
	['ADDRESS', ADDRESS_PRECOMPILE_ABI, VIEM_ADDRESS_PRECOMPILE_ABI],
	['BANK', BANK_PRECOMPILE_ABI, VIEM_BANK_PRECOMPILE_ABI],
	['CONFIDENTIAL_TRANSFERS', CONFIDENTIAL_TRANSFERS_PRECOMPILE_ABI, VIEM_CONFIDENTIAL_TRANSFERS_PRECOMPILE_ABI],
	['DISTRIBUTION', DISTRIBUTION_PRECOMPILE_ABI, VIEM_DISTRIBUTION_PRECOMPILE_ABI],
	['GOVERNANCE', GOVERNANCE_PRECOMPILE_ABI, VIEM_GOVERNANCE_PRECOMPILE_ABI],
	['IBC', IBC_PRECOMPILE_ABI, VIEM_IBC_PRECOMPILE_ABI],
	['JSON', JSON_PRECOMPILE_ABI, VIEM_JSON_PRECOMPILE_ABI],
	['ORACLE', ORACLE_PRECOMPILE_ABI, VIEM_ORACLE_PRECOMPILE_ABI],
	['POINTER', POINTER_PRECOMPILE_ABI, VIEM_POINTER_PRECOMPILE_ABI],
	['POINTERVIEW', POINTERVIEW_PRECOMPILE_ABI, VIEM_POINTERVIEW_PRECOMPILE_ABI],
	['STAKING', STAKING_PRECOMPILE_ABI, VIEM_STAKING_PRECOMPILE_ABI],
	['WASM', WASM_PRECOMPILE_ABI, VIEM_WASM_PRECOMPILE_ABI]
];

describe('Viem precompile ABI exports', () => {
	it.each(ABI_PAIRS)('%s VIEM ABI should exactly match the raw ABI', (_name, rawAbi, viemAbi) => {
		expect(viemAbi).toBe(rawAbi); // referential equality
		expect(viemAbi).toEqual(rawAbi); // deep equality (optional)
	});
});
