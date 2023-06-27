import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _230 from "./wasm/v1/tx.amino";
import * as _231 from "./wasm/v1/tx.registry";
import * as _232 from "./wasm/v1/query.lcd";
import * as _260 from "./lcd";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._230,
      ..._231,
      ..._232
    };
  }
  export const ClientFactory = {
    ..._260
  };
}