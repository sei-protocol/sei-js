import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgRegisterWasmDependency, MsgRegisterWasmDependencyResponse } from "./tx";
export interface Msg {
  registerWasmDependency(request: MsgRegisterWasmDependency): Promise<MsgRegisterWasmDependencyResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.registerWasmDependency = this.registerWasmDependency.bind(this);
  }
  registerWasmDependency(request: MsgRegisterWasmDependency): Promise<MsgRegisterWasmDependencyResponse> {
    const data = MsgRegisterWasmDependency.encode(request).finish();
    const promise = this.rpc.request("cosmos.accesscontrol_x.v1beta1.Msg", "RegisterWasmDependency", data);
    return promise.then(data => MsgRegisterWasmDependencyResponse.decode(new BinaryReader(data)));
  }
}