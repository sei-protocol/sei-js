import * as ethersBarrel from '../ethers';
import * as precompilesBarrel from '../precompiles';
import * as viemBarrel from '../viem';

const precompileNamesFrom = (barrel: Record<string, unknown>, prefix: '' | 'ETHERS_' | 'VIEM_'): string[] => {
	const pattern = new RegExp(`^${prefix}([A-Z0-9]+)_PRECOMPILE_ABI$`);

	return Object.keys(barrel)
		.map((key) => pattern.exec(key)?.[1])
		.filter((name): name is string => name !== undefined)
		.sort();
};

describe('Precompile barrel parity', () => {
	const precompileNames = precompileNamesFrom(precompilesBarrel, '');
	const ethersNames = precompileNamesFrom(ethersBarrel, 'ETHERS_');
	const viemNames = precompileNamesFrom(viemBarrel, 'VIEM_');

	// Without this the three comparisons below would pass on three empty sets if the
	// ABI naming convention ever changes out from under the pattern above.
	it('discovers precompiles in the base barrel', () => {
		expect(precompileNames.length).toBeGreaterThan(0);
	});

	it('exposes the same precompiles from the ethers barrel as the base barrel', () => {
		expect(ethersNames).toEqual(precompileNames);
	});

	it('exposes the same precompiles from the viem barrel as the base barrel', () => {
		expect(viemNames).toEqual(precompileNames);
	});

	it('exposes an ethers contract factory for each precompile', () => {
		const factories = Object.keys(ethersBarrel)
			.map((key) => /^get([A-Za-z]+)PrecompileEthersV6Contract$/.exec(key)?.[1]?.toUpperCase())
			.filter((name): name is string => name !== undefined)
			.sort();

		expect(factories).toEqual(precompileNames);
	});
});
