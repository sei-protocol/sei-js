import { shouldUseTm34Client } from '../shouldUseTm34Client';

describe('shouldUseTm34Client', () => {
	it('should return true for atlantic-1 chainId', () => {
		const result = shouldUseTm34Client('atlantic-1');
		expect(result).toBe(true);
	});

	it('should return true for sei-devnet-1 chainId', () => {
		const result = shouldUseTm34Client('sei-devnet-1');
		expect(result).toBe(true);
	});

	it('should return false for other chainIds', () => {
		const result = shouldUseTm34Client('pacific-1');
		expect(result).toBe(false);

		const otherResult = shouldUseTm34Client('sei-chain');
		expect(otherResult).toBe(false);
	});
});
