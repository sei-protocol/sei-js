import { seiprotocol } from '@sei-js/proto';
import { getLCDQueryClient } from '../queryClient';

// Mock the createLCDClient method
jest.mock('@sei-js/proto', () => ({
	seiprotocol: {
		ClientFactory: {
			createLCDClient: jest.fn()
		}
	}
}));

describe('getLCDQueryClient', () => {
	it('should call createLCDClient with the correct argument and return the result', async () => {
		const restEndpoint = 'http://rest.atlantic-2.provider.com';

		await getLCDQueryClient(restEndpoint);

		expect(seiprotocol.ClientFactory.createLCDClient).toHaveBeenCalledWith({ restEndpoint });
	});
});
