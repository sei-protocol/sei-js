import { StargateClient, SigningStargateClient, AminoTypes } from '@cosmjs/stargate';
import { OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { createSeiAminoTypes, createSeiRegistry, getSigningStargateClient, getStargateClient } from '../stargateClient';

jest.mock('@cosmjs/stargate', () => {
	const originalModule = jest.requireActual('@cosmjs/stargate');

	return {
		...originalModule,
		StargateClient: {
			...originalModule.StargateClient,
			connect: jest.fn()
		},
		SigningStargateClient: {
			...originalModule.SigningStargateClient,
			connectWithSigner: jest.fn()
		}
	};
});

describe('stargateClient', () => {
	afterEach(() => {
		jest.restoreAllMocks();
		jest.clearAllMocks();
	});

	describe('createSeiRegistry', () => {
		it('should return a Registry instance', () => {
			const registry = createSeiRegistry();
			expect(registry).toBeInstanceOf(Registry);
		});
	});

	describe('createSeiAminoTypes', () => {
		it('should return an AminoTypes instance', () => {
			const aminoTypes = createSeiAminoTypes();
			expect(aminoTypes).toBeInstanceOf(AminoTypes);
		});
	});

	describe('getStargateClient', () => {
		it('should call StargateClient.connect with the correct rpcEndpoint', async () => {
			const rpcEndpoint = 'http://localhost:26657';

			await getStargateClient(rpcEndpoint);

			expect(StargateClient.connect).toHaveBeenCalledWith(rpcEndpoint, {});
		});
	});

	describe('getSigningStargateClient', () => {
		it('should call SigningStargateClient.connectWithSigner with the correct parameters', async () => {
			const rpcEndpoint = 'http://localhost:26657';
			const signer = {} as OfflineSigner;
			const options = {};

			await getSigningStargateClient(rpcEndpoint, signer, options);

			expect(SigningStargateClient.connectWithSigner).toHaveBeenCalledWith(
				rpcEndpoint,
				signer,
				expect.objectContaining({
					registry: createSeiRegistry(),
					aminoTypes: createSeiAminoTypes()
				})
			);
		});
	});
});
