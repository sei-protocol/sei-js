import { readdirSync, readFileSync } from 'node:fs';
import {
	ADDRESS_PRECOMPILE_ABI,
	ADDRESS_PRECOMPILE_ADDRESS,
	BANK_PRECOMPILE_ABI,
	BANK_PRECOMPILE_ADDRESS,
	DISTRIBUTION_PRECOMPILE_ABI,
	DISTRIBUTION_PRECOMPILE_ADDRESS,
	GOVERNANCE_PRECOMPILE_ABI,
	GOVERNANCE_PRECOMPILE_ADDRESS,
	JSON_PRECOMPILE_ABI,
	JSON_PRECOMPILE_ADDRESS,
	P256_PRECOMPILE_ABI,
	P256_PRECOMPILE_ADDRESS,
	POINTER_PRECOMPILE_ABI,
	POINTER_PRECOMPILE_ADDRESS,
	POINTERVIEW_PRECOMPILE_ABI,
	POINTERVIEW_PRECOMPILE_ADDRESS,
	SOLO_PRECOMPILE_ABI,
	SOLO_PRECOMPILE_ADDRESS,
	STAKING_PRECOMPILE_ABI,
	STAKING_PRECOMPILE_ADDRESS,
	WASM_PRECOMPILE_ABI,
	WASM_PRECOMPILE_ADDRESS
} from '../precompiles';

const V66_FIXTURE_DIRECTORY = new URL('./fixtures/v66/', import.meta.url);
const INTENTIONALLY_UNEXPORTED_V66_ABIS = ['ibc.json', 'oracle.json'] as const;

const loadAbiFixture = (fileName: string): readonly unknown[] => {
	const fixture: unknown = JSON.parse(readFileSync(new URL(fileName, V66_FIXTURE_DIRECTORY), 'utf8'));
	if (!Array.isArray(fixture)) {
		throw new TypeError(`Expected ${fileName} to contain an ABI array`);
	}
	return fixture;
};

const canonicalizeValue = (value: unknown): unknown => {
	if (Array.isArray(value)) {
		return value.map(canonicalizeValue);
	}
	if (value !== null && typeof value === 'object') {
		return Object.fromEntries(
			Object.entries(value)
				.sort(([left], [right]) => left.localeCompare(right))
				.map(([key, entry]) => [key, canonicalizeValue(entry)])
		);
	}
	return value;
};

const canonicalizeAbi = (abi: readonly unknown[]): unknown[] => {
	return abi.map(canonicalizeValue).sort((left, right) => JSON.stringify(left).localeCompare(JSON.stringify(right)));
};

const V66_PRECOMPILES = [
	['Address', ADDRESS_PRECOMPILE_ADDRESS, '0x0000000000000000000000000000000000001004', ADDRESS_PRECOMPILE_ABI, 'addr.json'],
	['Bank', BANK_PRECOMPILE_ADDRESS, '0x0000000000000000000000000000000000001001', BANK_PRECOMPILE_ABI, 'bank.json'],
	['Distribution', DISTRIBUTION_PRECOMPILE_ADDRESS, '0x0000000000000000000000000000000000001007', DISTRIBUTION_PRECOMPILE_ABI, 'distribution.json'],
	['Governance', GOVERNANCE_PRECOMPILE_ADDRESS, '0x0000000000000000000000000000000000001006', GOVERNANCE_PRECOMPILE_ABI, 'gov.json'],
	['JSON', JSON_PRECOMPILE_ADDRESS, '0x0000000000000000000000000000000000001003', JSON_PRECOMPILE_ABI, 'json.json'],
	['P256', P256_PRECOMPILE_ADDRESS, '0x0000000000000000000000000000000000001011', P256_PRECOMPILE_ABI, 'p256.json'],
	['Pointer', POINTER_PRECOMPILE_ADDRESS, '0x000000000000000000000000000000000000100B', POINTER_PRECOMPILE_ABI, 'pointer.json'],
	['Pointerview', POINTERVIEW_PRECOMPILE_ADDRESS, '0x000000000000000000000000000000000000100A', POINTERVIEW_PRECOMPILE_ABI, 'pointerview.json'],
	['Solo', SOLO_PRECOMPILE_ADDRESS, '0x000000000000000000000000000000000000100C', SOLO_PRECOMPILE_ABI, 'solo.json'],
	['Staking', STAKING_PRECOMPILE_ADDRESS, '0x0000000000000000000000000000000000001005', STAKING_PRECOMPILE_ABI, 'staking.json'],
	['Wasm', WASM_PRECOMPILE_ADDRESS, '0x0000000000000000000000000000000000001002', WASM_PRECOMPILE_ABI, 'wasmd.json']
] as const;

describe('Sei Chain v6.6.1 precompile parity', () => {
	it('accounts for every ABI in the frozen v6.6 snapshot', () => {
		const fixtureFiles = readdirSync(V66_FIXTURE_DIRECTORY)
			.filter((fileName) => fileName.endsWith('.json'))
			.sort();
		const accountedForFiles = [...V66_PRECOMPILES.map(([, , , , fileName]) => fileName), ...INTENTIONALLY_UNEXPORTED_V66_ABIS].sort();

		expect(fixtureFiles).toEqual(accountedForFiles);
	});

	it.each(V66_PRECOMPILES)('%s address and ABI match the vendored v6.6 snapshot', (_name, address, expectedAddress, abi, fixtureFile) => {
		expect(address).toBe(expectedAddress);
		expect(canonicalizeAbi(abi)).toEqual(canonicalizeAbi(loadAbiFixture(fixtureFile)));
	});
});
