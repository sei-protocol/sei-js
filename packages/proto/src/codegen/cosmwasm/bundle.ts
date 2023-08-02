import * as _44 from "./wasm/v1/genesis";
import * as _45 from "./wasm/v1/ibc";
import * as _46 from "./wasm/v1/proposal";
import * as _47 from "./wasm/v1/query";
import * as _48 from "./wasm/v1/tx";
import * as _49 from "./wasm/v1/types";
import * as _160 from "./wasm/v1/tx.amino";
import * as _161 from "./wasm/v1/tx.registry";
import * as _162 from "./wasm/v1/query.lcd";
import * as _163 from "./wasm/v1/query.rpc.Query";
import * as _164 from "./wasm/v1/tx.rpc.msg";
import * as _207 from "./lcd";
import * as _208 from "./rpc.query";
import * as _209 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164
    };
  }
  export const ClientFactory = {
    ..._207,
    ..._208,
    ..._209
  };
}