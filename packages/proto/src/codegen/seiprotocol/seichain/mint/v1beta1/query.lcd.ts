import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryMinterRequest, QueryMinterResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.minter = this.minter.bind(this);
  }
  /* Params returns the total set of minting parameters. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `seichain/mint/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* EpochProvisions current minting epoch provisions value. */


  async minter(_params: QueryMinterRequest = {}): Promise<QueryMinterResponseSDKType> {
    const endpoint = `seichain/mint/v1beta1/minter`;
    return await this.req.get<QueryMinterResponseSDKType>(endpoint);
  }

}