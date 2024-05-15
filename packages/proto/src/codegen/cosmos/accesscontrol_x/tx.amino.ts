import { MsgRegisterWasmDependency } from "./tx";
export const AminoConverter = {
  "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency": {
    aminoType: "cosmos-sdk/MsgRegisterWasmDependency",
    toAmino: MsgRegisterWasmDependency.toAmino,
    fromAmino: MsgRegisterWasmDependency.fromAmino
  }
};