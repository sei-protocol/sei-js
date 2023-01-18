import { seiprotocol } from '@sei-js/proto';

export const getQueryClient = async (restEndpoint: string) => {
  return await seiprotocol.ClientFactory.createLCDClient({ restEndpoint });
};
