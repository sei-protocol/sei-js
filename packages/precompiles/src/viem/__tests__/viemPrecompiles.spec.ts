import type { Abi } from 'viem';
import {
	ADDRESS_PRECOMPILE_ABI,
	BANK_PRECOMPILE_ABI,
	DISTRIBUTION_PRECOMPILE_ABI,
	GOVERNANCE_PRECOMPILE_ABI,
	JSON_PRECOMPILE_ABI,
	P256_PRECOMPILE_ABI,
	POINTER_PRECOMPILE_ABI,
	POINTERVIEW_PRECOMPILE_ABI,
	SOLO_PRECOMPILE_ABI,
	STAKING_PRECOMPILE_ABI,
	WASM_PRECOMPILE_ABI
} from '../../precompiles';
import * as viemEntryPoint from '../';

const PRECOMPILE_ABIS: [string, Abi, Abi][] = [
	['ADDRESS', ADDRESS_PRECOMPILE_ABI, viemEntryPoint.ADDRESS_PRECOMPILE_ABI],
	['BANK', BANK_PRECOMPILE_ABI, viemEntryPoint.BANK_PRECOMPILE_ABI],
	['DISTRIBUTION', DISTRIBUTION_PRECOMPILE_ABI, viemEntryPoint.DISTRIBUTION_PRECOMPILE_ABI],
	['GOVERNANCE', GOVERNANCE_PRECOMPILE_ABI, viemEntryPoint.GOVERNANCE_PRECOMPILE_ABI],
	['JSON', JSON_PRECOMPILE_ABI, viemEntryPoint.JSON_PRECOMPILE_ABI],
	['P256', P256_PRECOMPILE_ABI, viemEntryPoint.P256_PRECOMPILE_ABI],
	['POINTER', POINTER_PRECOMPILE_ABI, viemEntryPoint.POINTER_PRECOMPILE_ABI],
	['POINTERVIEW', POINTERVIEW_PRECOMPILE_ABI, viemEntryPoint.POINTERVIEW_PRECOMPILE_ABI],
	['SOLO', SOLO_PRECOMPILE_ABI, viemEntryPoint.SOLO_PRECOMPILE_ABI],
	['STAKING', STAKING_PRECOMPILE_ABI, viemEntryPoint.STAKING_PRECOMPILE_ABI],
	['WASM', WASM_PRECOMPILE_ABI, viemEntryPoint.WASM_PRECOMPILE_ABI]
];

describe('Viem precompile ABIs', () => {
	it.each(PRECOMPILE_ABIS)('%s ABI should be a valid Viem Abi array', (_name, _rawAbi, abi) => {
		expect(Array.isArray(abi)).toBe(true);
		for (const entry of abi) {
			expect(entry).toHaveProperty('type');
		}
	});

	it.each(PRECOMPILE_ABIS)('%s ABI should preserve raw export identity', (_name, rawAbi, entryPointAbi) => {
		expect(entryPointAbi).toBe(rawAbi);
	});
});
