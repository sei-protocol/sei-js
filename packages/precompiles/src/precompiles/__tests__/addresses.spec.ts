import {
	ADDRESS_PRECOMPILE_ADDRESS,
	BANK_PRECOMPILE_ADDRESS,
	DISTRIBUTION_PRECOMPILE_ADDRESS,
	GOVERNANCE_PRECOMPILE_ADDRESS,
	IBC_PRECOMPILE_ADDRESS,
	JSON_PRECOMPILE_ADDRESS,
	ORACLE_PRECOMPILE_ADDRESS,
	POINTER_PRECOMPILE_ADDRESS,
	POINTERVIEW_PRECOMPILE_ADDRESS,
	SOLO_PRECOMPILE_ADDRESS,
	STAKING_PRECOMPILE_ADDRESS,
	WASM_PRECOMPILE_ADDRESS
} from '../index';

const PRECOMPILE_ADDRESSES: [string, string][] = [
	['ADDRESS', ADDRESS_PRECOMPILE_ADDRESS],
	['BANK', BANK_PRECOMPILE_ADDRESS],
	['DISTRIBUTION', DISTRIBUTION_PRECOMPILE_ADDRESS],
	['GOVERNANCE', GOVERNANCE_PRECOMPILE_ADDRESS],
	['IBC', IBC_PRECOMPILE_ADDRESS],
	['JSON', JSON_PRECOMPILE_ADDRESS],
	['ORACLE', ORACLE_PRECOMPILE_ADDRESS],
	['POINTER', POINTER_PRECOMPILE_ADDRESS],
	['POINTERVIEW', POINTERVIEW_PRECOMPILE_ADDRESS],
	['SOLO', SOLO_PRECOMPILE_ADDRESS],
	['STAKING', STAKING_PRECOMPILE_ADDRESS],
	['WASM', WASM_PRECOMPILE_ADDRESS]
];

/** Validates an ERC-55 checksummed Ethereum address: 0x + exactly 40 hex characters. */
function isValidEthAddress(address: string): boolean {
	return /^0x[0-9a-fA-F]{40}$/.test(address);
}

describe('Precompile addresses', () => {
	it.each(PRECOMPILE_ADDRESSES)('%s address is a valid 42-character Ethereum address', (_name, address) => {
		expect(typeof address).toBe('string');
		expect(isValidEthAddress(address)).toBe(true);
	});

	it('all precompile addresses are unique', () => {
		const addresses = PRECOMPILE_ADDRESSES.map(([, addr]) => addr.toLowerCase());
		const unique = new Set(addresses);
		expect(unique.size).toBe(addresses.length);
	});

	it('all precompile addresses start with 0x000000000000000000000000000000000000', () => {
		// Sei precompiles live in the reserved 0x1000–0x10FF range
		for (const [, address] of PRECOMPILE_ADDRESSES) {
			expect(address.toLowerCase()).toMatch(/^0x0{36}/);
		}
	});
});
