import { Rpc } from '@osmonauts/helpers';
import * as _m0 from 'protobufjs/minimal';
import { MsgPlaceOrders, MsgPlaceOrdersResponse, MsgCancelOrders, MsgCancelOrdersResponse, MsgRegisterContract, MsgRegisterContractResponse } from './tx';
/** Msg defines the RPC service */

export interface Msg {
  placeOrders(request: MsgPlaceOrders): Promise<MsgPlaceOrdersResponse>;
  /*null*/

  cancelOrders(request: MsgCancelOrders): Promise<MsgCancelOrdersResponse>;
  /*null*/

  registerContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.placeOrders = this.placeOrders.bind(this);
    this.cancelOrders = this.cancelOrders.bind(this);
    this.registerContract = this.registerContract.bind(this);
  }

  placeOrders(request: MsgPlaceOrders): Promise<MsgPlaceOrdersResponse> {
    const data = MsgPlaceOrders.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Msg', 'PlaceOrders', data);
    return promise.then(data => MsgPlaceOrdersResponse.decode(new _m0.Reader(data)));
  }

  cancelOrders(request: MsgCancelOrders): Promise<MsgCancelOrdersResponse> {
    const data = MsgCancelOrders.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Msg', 'CancelOrders', data);
    return promise.then(data => MsgCancelOrdersResponse.decode(new _m0.Reader(data)));
  }

  registerContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse> {
    const data = MsgRegisterContract.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Msg', 'RegisterContract', data);
    return promise.then(data => MsgRegisterContractResponse.decode(new _m0.Reader(data)));
  }

}