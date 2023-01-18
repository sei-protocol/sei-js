import { Rpc } from '@osmonauts/helpers';
import * as _m0 from 'protobufjs/minimal';
import { MsgRecordTransactionData, MsgRecordTransactionDataResponse } from './tx';
/** Msg defines the RPC service */

export interface Msg {
  recordTransactionData(request: MsgRecordTransactionData): Promise<MsgRecordTransactionDataResponse>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.recordTransactionData = this.recordTransactionData.bind(this);
  }

  recordTransactionData(request: MsgRecordTransactionData): Promise<MsgRecordTransactionDataResponse> {
    const data = MsgRecordTransactionData.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.nitro.Msg', 'RecordTransactionData', data);
    return promise.then(data => MsgRecordTransactionDataResponse.decode(new _m0.Reader(data)));
  }

}