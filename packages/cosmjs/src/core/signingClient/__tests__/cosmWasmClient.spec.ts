import { CosmWasmClient, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';
import { getCosmWasmClient, getSigningCosmWasmClient } from '../cosmWasmClient';

jest.mock('@cosmjs/cosmwasm-stargate', () => ({
	CosmWasmClient: {
		connect: jest.fn()
	},
	SigningCosmWasmClient: {
		connectWithSigner: jest.fn()
	}
}));

describe('getCosmWasmClient', () => {
	it('should call CosmWasmClient.connect with the correct rpcEndpoint', async () => {
		const rpcEndpoint = 'http://localhost:26657';

		await getCosmWasmClient(rpcEndpoint);

		expect(CosmWasmClient.connect).toHaveBeenCalledWith(rpcEndpoint);
	});
});

describe('getSigningCosmWasmClient', () => {
	it('should call SigningCosmWasmClient.connectWithSigner with the correct parameters', async () => {
		const rpcEndpoint = 'http://localhost:26657';
		const signer = {} as OfflineSigner;
		const options = {};

		await getSigningCosmWasmClient(rpcEndpoint, signer, options);

		expect(SigningCosmWasmClient.connectWithSigner).toHaveBeenCalledWith(
			rpcEndpoint,
			signer,
			expect.objectContaining({
				registry: expect.anything(),
				aminoTypes: expect.anything()
			})
		);
	});
});
