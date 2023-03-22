import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _233 from "./wasm/v1/tx.amino";
import * as _234 from "./wasm/v1/tx.registry";
import * as _235 from "./wasm/v1/query.lcd";
import * as _263 from "./lcd";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._233,
      ..._234,
      ..._235
    };
  }
  export const ClientFactory = { ..._263
  };
}