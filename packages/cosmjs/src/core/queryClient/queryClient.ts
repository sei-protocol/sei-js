import { seiprotocol } from '@sei-js/proto';

/**
 * A typescript interface for the default Cosmos query client for use in the LCD client.
 * @category Interfaces
 */
export interface CosmosQueryClients {
	auth: {
		v1beta1: any; // Replace 'any' with the actual type of your query client
	};
	bank: {
		v1beta1: any;
	};
	distribution: {
		v1beta1: any;
	};
	gov: {
		v1beta1: any;
	};
	staking: {
		v1beta1: any;
	};
	tx: {
		v1beta1: any;
	};
	upgrade: {
		v1beta1: any;
	};
}

/**
 * A typescript interface for the Seichain query client for use in the LCD client.
 * @category Interfaces
 */
export interface SeichainQueryClients {
	dex: any;
	epoch: any;
	mint: any;
	oracle: any;
	tokenfactory: any;
}

/**
 * A typescript interface for the Sei query client for use in the LCD client.
 * @category Interfaces
 */
export interface SeiQueryClients {
	seichain: SeichainQueryClients;
}

/**
 * A typescript interface for the Sei query client returned from the `getLCDQueryClient` function.
 * @category Interfaces
 */
export interface SeiLCDQueryClient {
	cosmos: CosmosQueryClients;
	seiprotocol: SeiQueryClients;
}

/**
 * Gets a client used to interact with the Sei chain.
 * @param restEndpoint The endpoint of the REST node used to interact to the Sei chain.
 * @returns An LCD client object that can be used to query the Sei chain.
 * @category LCDQueryClient
 */
export const getLCDQueryClient = async (restEndpoint: string) => {
	return (await seiprotocol.ClientFactory.createLCDClient({ restEndpoint })) as SeiLCDQueryClient;
};
