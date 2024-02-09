import { seiprotocol } from '@sei-js/proto';

/**
 * Gets a client used to interact with the Sei chain.
 * @param restEndpoint The endpoint of the RPC node used to interact to the Sei chain.
 * @returns A client object that can be used to query the Sei chain.
 * For an example of how to use this client, refer to {@linkcode getPool}.
 */
export const getQueryClient = async (restEndpoint: string) => {
  return await seiprotocol.ClientFactory.createLCDClient({ restEndpoint });
};
