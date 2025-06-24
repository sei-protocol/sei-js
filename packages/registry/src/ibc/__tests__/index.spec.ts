import type { Network } from '../../index';
import { IBC_INFO } from '../index';

describe('IBCInfo Tests', () => {
	// Check if IBCInfo contains all expected networks
	it('contains all required networks', () => {
		const expectedNetworks: Network[] = ['pacific-1', 'atlantic-2', 'arctic-1'];
		for (const network of expectedNetworks) {
			expect(IBC_INFO).toHaveProperty(network);
		}
	});

	// Validate the structure of IBCInfo for each network
	it('validates structure for each network', () => {
		for (const channels of Object.values(IBC_INFO)) {
			for (const channel of channels) {
				expect(typeof channel.counterparty_chain_name).toBe('string');
				expect(typeof channel.dst_channel).toBe('string');
				expect(typeof channel.src_channel).toBe('string');
				expect(typeof channel.port_id).toBe('string');
				expect(typeof channel.client_id).toBe('string');
			}
		}
	});

	// Example: Check specific content for a given network
	it('checks specific values for a given network', () => {
		const pacific1Channels = IBC_INFO['pacific-1'];
		expect(pacific1Channels.length).toBeGreaterThan(0); // Ensure there's at least one channel
		const firstChannel = pacific1Channels[0];
		expect(firstChannel.counterparty_chain_name).not.toBe('');
		expect(firstChannel.dst_channel.startsWith('channel-')).toBeTruthy();
	});
});
