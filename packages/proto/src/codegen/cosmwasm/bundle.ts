import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _264 from "./wasm/v1/tx.amino";
import * as _265 from "./wasm/v1/tx.registry";
import * as _266 from "./wasm/v1/query.lcd";
import * as _267 from "./wasm/v1/query.rpc.query";
import * as _268 from "./wasm/v1/tx.rpc.msg";
import * as _317 from "./lcd";
import * as _318 from "./rpc.query";
import * as _319 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._264,
      ..._265,
      ..._266,
      ..._267,
      ..._268
    };
  }
  export const ClientFactory = { ..._317,
    ..._318,
    ..._319
  };
}