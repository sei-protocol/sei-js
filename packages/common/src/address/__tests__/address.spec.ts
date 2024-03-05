import { truncateCosmosAddress } from '../address';

describe('truncateAddress', () => {
	it('should return the truncated address with first 3 and last 5 characters for valid sei contract addresses', () => {
		const address = 'sei1v02xglfgtf4dk6jf8xa92my49zs4395zjnf4hzpzrs944znzdztq56zrr0';
		const truncatedAddress = truncateCosmosAddress(address);
		expect(truncatedAddress).toBe('sei....6zrr0');
	});

	it('should return the input address for invalid sei addresses', () => {
		const ethAddress = '0x32Be343B94f860124dC4fEe278FDCBD38C102D88';
		expect(truncateCosmosAddress(ethAddress)).toBe(ethAddress);

		const shortAddress = 'sei14ae4g3422thcyuxler2ws3w25fpesrh';
		expect(truncateCosmosAddress(shortAddress)).toBe(shortAddress);

		const osmoAddress = 'osmo14ae4g3422thcyuxler2ws3w25fpesrh2uqmgm9';
		expect(truncateCosmosAddress(osmoAddress)).toBe(osmoAddress);
	});
});
