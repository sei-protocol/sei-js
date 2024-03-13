import { seiprotocol } from '@sei-js/proto';

/**
 * Gets a client used to interact with the Sei chain.
 * @param restEndpoint The endpoint of the REST node used to interact to the Sei chain.
 * @returns An LCD client object that can be used to query the Sei chain.
 * @category Clients
 */
export const getQueryClient = async (restEndpoint: string) => {
	return await seiprotocol.ClientFactory.createLCDClient({ restEndpoint });
};
