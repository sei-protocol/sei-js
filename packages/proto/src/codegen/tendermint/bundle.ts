import * as _123 from "./abci/types";
import * as _124 from "./crypto/keys";
import * as _125 from "./crypto/proof";
import * as _126 from "./libs/bits/types";
import * as _127 from "./p2p/types";
import * as _128 from "./types/block";
import * as _129 from "./types/evidence";
import * as _130 from "./types/params";
import * as _131 from "./types/types";
import * as _132 from "./types/validator";
import * as _133 from "./version/types";
export namespace tendermint {
  export const abci = { ..._123
  };
  export const crypto = { ..._124,
    ..._125
  };
  export namespace libs {
    export const bits = { ..._126
    };
  }
  export const p2p = { ..._127
  };
  export const types = { ..._128,
    ..._129,
    ..._130,
    ..._131,
    ..._132
  };
  export const version = { ..._133
  };
}