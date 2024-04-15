import { AminoTypes, SigningStargateClient, SigningStargateClientOptions, StargateClient, StargateClientOptions, defaultRegistryTypes } from '@cosmjs/stargate';
import { OfflineSigner, Registry } from '@cosmjs/proto-signing';
import {
	cosmosAminoConverters,
	cosmwasmAminoConverters,
	cosmwasmProtoRegistry,
	ibcAminoConverters,
	seiprotocolProtoRegistry,
	seiprotocolAminoConverters
} from '@sei-js/proto';
import { HttpEndpoint } from '@cosmjs/cosmwasm-stargate';

/**
 * Creates a Registry object that maps CosmWasm and Sei protobuf type identifiers to their actual implementations.
 *
 * @example
 * ```tsx
 * import { Registry } from "@cosmjs/proto-signing";
 * import { defaultRegistryTypes } from "@cosmjs/stargate";
 * import { getSigningStargateClient } from '@sei-js/cosmjs';
 * import { seiprotocol, seiprotocolProtoRegistry } from "@sei-js/proto";
 *
 * ...
 *
 * // Set up Sei proto registry
 * const registry = new Registry([
 *   ...defaultRegistryTypes,
 *   ...seiprotocolProtoRegistry,
 * ]);
 *
 * // Create a client with registry
 * const signingClient = await getSigningStargateClient(RPC_URL, offlineSigner, { registry });
 * ```
 *
 * @returns A Registry object that maps CosmWasm and Sei protobuf type identifiers to their actual implementations.
 * @category Config
 */
export const createSeiRegistry = (): Registry => {
	// @ts-ignore
	return new Registry([...defaultRegistryTypes, ...cosmwasmProtoRegistry, ...seiprotocolProtoRegistry]);
};

/**
 * Creates a mapping of stargate message types to Sei Amino types.
 *
 * @example
 * ```tsx
 * import { Registry } from "@cosmjs/proto-signing";
 * import { defaultRegistryTypes } from "@cosmjs/stargate";
 * import { getSigningStargateClient } from '@sei-js/cosmjs';
 * import { seiprotocol, seiprotocolProtoRegistry } from "@sei-js/proto";
 *
 * ...
 *
 * // Set up Sei proto registry
 * const registry = new Registry([
 *   ...defaultRegistryTypes,
 *   ...seiprotocolProtoRegistry,
 * ]);
 *
 * // Create a client with registry
 * const signingClient = await getSigningStargateClient(RPC_URL, offlineSigner, { registry });
 * ```
 *
 * @returns A mapping of stargate message types to Sei Amino types.
 * @category Config
 */
export const createSeiAminoTypes = (): AminoTypes => {
	const types = {
		...cosmosAminoConverters,
		...cosmwasmAminoConverters,
		...ibcAminoConverters,
		...seiprotocolAminoConverters
	};
	return new AminoTypes(types);
};

/**
 * Gets a @cosmjs/stargate client used to interact with the Sei chain.
 *
 * @example
 * ```tsx
 * import { getStargateClient } from '@sei-js/cosmjs';
 *
 * // Don't forget to connect if using a wallet extension
 * // or create a wallet from a mnemonic (See above)
 * await window.compass.connect(chainId);
 *
 * const offlineSigner = await window.compass.getOfflineSigner(chainId);
 *
 * const signingClient = await getStargateClient(RPC_URL, offlineSigner);
 * ```
 *
 * @example
 * With custom registry and amino types
 * ```tsx
 * import { Registry } from "@cosmjs/proto-signing";
 * import { defaultRegistryTypes } from "@cosmjs/stargate";
 * import { getSigningStargateClient } from '@sei-js/cosmjs';
 * import { seiprotocol, seiprotocolProtoRegistry } from "@sei-js/proto";
 *
 * ...
 *
 * // Set up Sei proto registry
 * const registry = new Registry([
 *   ...defaultRegistryTypes,
 *   ...seiprotocolProtoRegistry,
 * ]);
 *
 * // Create a client with registry
 * const signingClient = await getStargateClient(RPC_URL, offlineSigner, { registry });
 * ```
 *
 * @param rpcEndpoint The endpoint of the RPC node used to interact to the Sei chain.
 * @param options A StargateClientOptions object used to configure the stargate client.
 * @returns A StargateClient object used to interact with the Sei chain.
 * @category Clients
 */
export const getStargateClient = async (rpcEndpoint: string | HttpEndpoint, options: StargateClientOptions = {}): Promise<StargateClient> => {
	return StargateClient.connect(rpcEndpoint, options);
};

/**
 * Gets a @cosmjs/stargate client used to sign transactions on the Sei chain.
 *
 * @example
 * Standard usage
 * ```tsx
 * import { getSigningStargateClient } from '@sei-js/cosmjs';
 *
 * // Don't forget to connect if using a wallet extension
 * // or create a wallet from a mnemonic (See above)
 * await window.compass.connect(chainId);
 *
 * const offlineSigner = await window.compass.getOfflineSigner(chainId);
 *
 * const signingClient = await getSigningStargateClient(RPC_URL, offlineSigner);
 * ```
 *
 * @example
 * With custom registry and amino types
 * ```tsx
 * import { Registry } from "@cosmjs/proto-signing";
 * import { defaultRegistryTypes } from "@cosmjs/stargate";
 * import { getSigningStargateClient } from '@sei-js/cosmjs';
 * import { seiprotocol, seiprotocolProtoRegistry } from "@sei-js/proto";
 *
 * ...
 *
 * // Set up Sei proto registry
 * const registry = new Registry([
 *   ...defaultRegistryTypes,
 *   ...seiprotocolProtoRegistry,
 * ]);
 *
 * // Create a client with registry
 * const signingClient = await getSigningStargateClient(RPC_URL, offlineSigner, { registry });
 * ```
 *
 * @example
 * Transfer tokens (Bank send):
 * ```tsx
 * import { calculateFee } from '@cosmjs/stargate';
 *
 * const fee = calculateFee(100000, "0.1usei");
 * const amount = { amount: SEND_AMOUNT, denom: TOKEN_DENOM };
 *
 * const sendResponse = await signingClient.sendTokens(SENDER_ADDRESS, DESTINATION_ADDRESS, [amount], fee);
 * ```
 *
 * @example
 * IBC Transfer:
 * ```tsx
 * import { calculateFee } from '@cosmjs/stargate';
 * import { seiprotocol } from '@sei-js/proto';
 *
 * const amount = { amount: SEND_AMOUNT, denom: TOKEN_DENOM };
 *
 * const ibcResponse = await signingClient.sendIbcTokens(SENDER_ADDRESS, DESTINATION_ADDRESSS, amount, 'transfer', CHANNEL_ID, undefined, undefined, fee)
 *
 * // Create message to place an order
 * const { placeOrders } = seiprotocol.seichain.dex.MessageComposer.withTypeUrl;
 * const msg = placeOrders({ contractAddr, creator, funds, orders });
 * const fee = calculateFee(150000, "0.1usei");
 *
 * // Sign and broadcast the message
 * const response = signingClient.signAndBroadcast(firstAccount.address, [msg], fee);
 * ```
 *
 * @param rpcEndpoint The endpoint of the RPC node used to interact to the Sei chain.
 * @param signer An OfflineAminoSigner or OfflineDirectSigner from @cosmjs/amino containing info about the signer.
 * @param options A SigningStargateClientOptions object used to configure the stargate client.
 * @returns A SigningStargateClient object used to sign transactions on the Sei chain.
 * @category Clients
 */
export const getSigningStargateClient = async (
	rpcEndpoint: string | HttpEndpoint,
	signer: OfflineSigner,
	options: SigningStargateClientOptions = {}
): Promise<SigningStargateClient> => {
	const registry = createSeiRegistry();
	const aminoTypes = createSeiAminoTypes();
	return SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
		registry,
		aminoTypes,
		broadcastPollIntervalMs: options.broadcastPollIntervalMs || 400,
		...options
	});
};
