import { seiprotocol } from '@sei-js/proto';

/**
 * Gets a client used to interact with the Sei chain.
 *
 * @example
 * ```tsx
 * import { getQueryClient } from '@sei-js/cosmjs';
 *
 * const queryClient = await getQueryClient(REST_URL);
 *
 * // Getting the market summary from the Sei dex module
 * const dexMarketSummary = await queryClient.seiprotocol.seichain.dex.getMarketSummary(params);
 *
 * // Query the bank balance of a given address
 * const balances = await queryClient.cosmos.bank.v1beta1.allBalances({ address });
 *
 * // Query a specific transaction hash
 * const txInfo = await queryClient.cosmos.tx.v1beta1.getTx({ hash });
 * ```
 *
 * @param restEndpoint The endpoint of the REST node used to interact to the Sei chain.
 * @returns An LCD client object that can be used to query the Sei chain.
 * @category Clients
 */
export const getQueryClient = async (restEndpoint: string) => {
	return await seiprotocol.ClientFactory.createLCDClient({ restEndpoint });
};
