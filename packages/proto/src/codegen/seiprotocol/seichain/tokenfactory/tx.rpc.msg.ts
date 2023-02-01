import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  /*null*/

  mint(request: MsgMint): Promise<MsgMintResponse>;
  /*null*/

  burn(request: MsgBurn): Promise<MsgBurnResponse>;
  /*null*/

  changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createDenom = this.createDenom.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
    this.changeAdmin = this.changeAdmin.bind(this);
  }

  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request("seiprotocol.seichain.tokenfactory.Msg", "CreateDenom", data);
    return promise.then(data => MsgCreateDenomResponse.decode(new _m0.Reader(data)));
  }

  mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("seiprotocol.seichain.tokenfactory.Msg", "Mint", data);
    return promise.then(data => MsgMintResponse.decode(new _m0.Reader(data)));
  }

  burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("seiprotocol.seichain.tokenfactory.Msg", "Burn", data);
    return promise.then(data => MsgBurnResponse.decode(new _m0.Reader(data)));
  }

  changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse> {
    const data = MsgChangeAdmin.encode(request).finish();
    const promise = this.rpc.request("seiprotocol.seichain.tokenfactory.Msg", "ChangeAdmin", data);
    return promise.then(data => MsgChangeAdminResponse.decode(new _m0.Reader(data)));
  }

}