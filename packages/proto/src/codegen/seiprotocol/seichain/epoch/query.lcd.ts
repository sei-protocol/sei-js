import { LCDClient } from '@osmonauts/lcd';
import { QueryEpochRequest, QueryEpochResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from './query';
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.epoch = this.epoch.bind(this);
    this.params = this.params.bind(this);
  }
  /* Query the epoch in the chain */


  async epoch(_params: QueryEpochRequest = {}): Promise<QueryEpochResponseSDKType> {
    const endpoint = `sei-protocol/seichain/epoch/epoch`;
    return await this.req.get<QueryEpochResponseSDKType>(endpoint);
  }
  /* Parameters queries the parameters of the module. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `sei-protocol/seichain/epoch/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }

}