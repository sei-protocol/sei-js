import {
	ADDRESS_PRECOMPILE_ABI,
	BANK_PRECOMPILE_ABI,
	DISTRIBUTION_PRECOMPILE_ABI,
	GOVERNANCE_PRECOMPILE_ABI,
	IBC_PRECOMPILE_ABI,
	JSON_PRECOMPILE_ABI,
	ORACLE_PRECOMPILE_ABI,
	POINTER_PRECOMPILE_ABI,
	POINTERVIEW_PRECOMPILE_ABI,
	SOLO_PRECOMPILE_ABI,
	STAKING_PRECOMPILE_ABI,
	WASM_PRECOMPILE_ABI
} from '../index';

type AbiEntry = { type: string; name?: string; inputs?: readonly unknown[]; outputs?: readonly unknown[]; stateMutability?: string };
type Abi = readonly AbiEntry[];

function getFunctionNames(abi: Abi): string[] {
	return abi.filter((entry) => entry.type === 'function').map((entry) => entry.name!);
}

function getFunctions(abi: Abi): AbiEntry[] {
	return abi.filter((entry) => entry.type === 'function');
}

const PRECOMPILE_ABIS: [string, Abi, string[]][] = [
	['ADDRESS', ADDRESS_PRECOMPILE_ABI, ['getSeiAddr', 'getEvmAddr', 'associate', 'associatePubKey']],
	['BANK', BANK_PRECOMPILE_ABI, ['send', 'sendNative', 'balance', 'all_balances', 'supply', 'decimals', 'name', 'symbol']],
	['DISTRIBUTION', DISTRIBUTION_PRECOMPILE_ABI, ['setWithdrawAddress', 'withdrawDelegationRewards', 'withdrawMultipleDelegationRewards', 'rewards']],
	['GOVERNANCE', GOVERNANCE_PRECOMPILE_ABI, ['vote', 'deposit']],
	['IBC', IBC_PRECOMPILE_ABI, ['transfer']],
	['JSON', JSON_PRECOMPILE_ABI, ['extractAsBytes', 'extractAsBytesList']],
	['ORACLE', ORACLE_PRECOMPILE_ABI, ['getExchangeRates', 'getOracleTwaps']],
	['POINTER', POINTER_PRECOMPILE_ABI, ['addCW20Pointer', 'addCW721Pointer', 'addNativePointer']],
	['POINTERVIEW', POINTERVIEW_PRECOMPILE_ABI, ['getCW20Pointer', 'getCW721Pointer']],
	['STAKING', STAKING_PRECOMPILE_ABI, ['delegate', 'undelegate', 'redelegate', 'delegation']],
	['WASM', WASM_PRECOMPILE_ABI, ['execute', 'execute_batch']]
];

describe('Precompile ABIs — function names', () => {
	it.each(PRECOMPILE_ABIS)('%s ABI contains all expected function names', (_name, abi, expectedFunctions) => {
		const actualFunctions = getFunctionNames(abi as Abi);
		for (const fn of expectedFunctions) {
			expect(actualFunctions).toContain(fn);
		}
	});
});

describe('Precompile ABIs — function entry structure', () => {
	it.each(PRECOMPILE_ABIS)('%s ABI functions each have inputs, outputs, and stateMutability', (_name, abi) => {
		const functions = getFunctions(abi as Abi);
		expect(functions.length).toBeGreaterThan(0);

		for (const fn of functions) {
			expect(Array.isArray(fn.inputs)).toBe(true);
			expect(Array.isArray(fn.outputs)).toBe(true);
			expect(typeof fn.stateMutability).toBe('string');
			expect(['view', 'nonpayable', 'payable', 'pure']).toContain(fn.stateMutability);
		}
	});
});

describe('Precompile ABIs — top-level structure', () => {
	const ALL_ABIS: [string, Abi][] = [
		['ADDRESS', ADDRESS_PRECOMPILE_ABI],
		['BANK', BANK_PRECOMPILE_ABI],
		['DISTRIBUTION', DISTRIBUTION_PRECOMPILE_ABI],
		['GOVERNANCE', GOVERNANCE_PRECOMPILE_ABI],
		['IBC', IBC_PRECOMPILE_ABI],
		['JSON', JSON_PRECOMPILE_ABI],
		['ORACLE', ORACLE_PRECOMPILE_ABI],
		['POINTER', POINTER_PRECOMPILE_ABI],
		['POINTERVIEW', POINTERVIEW_PRECOMPILE_ABI],
		['SOLO', SOLO_PRECOMPILE_ABI],
		['STAKING', STAKING_PRECOMPILE_ABI],
		['WASM', WASM_PRECOMPILE_ABI]
	];

	it.each(ALL_ABIS)('%s ABI is a non-empty array', (_name, abi) => {
		expect(Array.isArray(abi)).toBe(true);
		expect((abi as Abi).length).toBeGreaterThan(0);
	});

	it.each(ALL_ABIS)('%s ABI entries each have a type field', (_name, abi) => {
		for (const entry of abi as Abi) {
			expect(typeof entry.type).toBe('string');
			expect(entry.type.length).toBeGreaterThan(0);
		}
	});
});
