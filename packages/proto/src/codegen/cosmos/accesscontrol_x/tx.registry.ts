import { TelescopeGeneratedType } from "../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgRegisterWasmDependency } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency", MsgRegisterWasmDependency]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerWasmDependency(value: MsgRegisterWasmDependency) {
      return {
        typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency",
        value: MsgRegisterWasmDependency.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerWasmDependency(value: MsgRegisterWasmDependency) {
      return {
        typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency",
        value
      };
    }
  },
  fromPartial: {
    registerWasmDependency(value: MsgRegisterWasmDependency) {
      return {
        typeUrl: "/cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency",
        value: MsgRegisterWasmDependency.fromPartial(value)
      };
    }
  }
};