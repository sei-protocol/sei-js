import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryEpochProvisionsRequest, QueryEpochProvisionsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.epochProvisions = this.epochProvisions.bind(this);
  }
  /* Params returns the total set of minting parameters. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `seichain/mint/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* EpochProvisions current minting epoch provisions value. */


  async epochProvisions(_params: QueryEpochProvisionsRequest = {}): Promise<QueryEpochProvisionsResponseSDKType> {
    const endpoint = `seichain/mint/v1beta1/epoch_provisions`;
    return await this.req.get<QueryEpochProvisionsResponseSDKType>(endpoint);
  }

}