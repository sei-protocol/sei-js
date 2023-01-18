import { LCDClient } from '@osmonauts/lcd';
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryRecordedTransactionDataRequest, QueryRecordedTransactionDataResponseSDKType, QueryStateRootRequest, QueryStateRootResponseSDKType, QuerySenderRequest, QuerySenderResponseSDKType } from './query';
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.recordedTransactionData = this.recordedTransactionData.bind(this);
    this.stateRoot = this.stateRoot.bind(this);
    this.sender = this.sender.bind(this);
  }
  /* Params */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `sei-protocol/seichain/nitro/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* RecordedTransactionData */


  async recordedTransactionData(params: QueryRecordedTransactionDataRequest): Promise<QueryRecordedTransactionDataResponseSDKType> {
    const endpoint = `sei-protocol/seichain/nitro/txs/${params.slot}`;
    return await this.req.get<QueryRecordedTransactionDataResponseSDKType>(endpoint);
  }
  /* StateRoot */


  async stateRoot(params: QueryStateRootRequest): Promise<QueryStateRootResponseSDKType> {
    const endpoint = `sei-protocol/seichain/nitro/state/${params.slot}`;
    return await this.req.get<QueryStateRootResponseSDKType>(endpoint);
  }
  /* Sender */


  async sender(params: QuerySenderRequest): Promise<QuerySenderResponseSDKType> {
    const endpoint = `sei-protocol/seichain/nitro/sender/${params.slot}`;
    return await this.req.get<QuerySenderResponseSDKType>(endpoint);
  }

}