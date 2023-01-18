import * as _2 from './authz/v1beta1/authz';
import * as _3 from './authz/v1beta1/event';
import * as _4 from './authz/v1beta1/genesis';
import * as _5 from './authz/v1beta1/query';
import * as _6 from './authz/v1beta1/tx';
import * as _7 from './bank/v1beta1/authz';
import * as _8 from './bank/v1beta1/bank';
import * as _9 from './bank/v1beta1/genesis';
import * as _10 from './bank/v1beta1/query';
import * as _11 from './bank/v1beta1/tx';
import * as _12 from './base/abci/v1beta1/abci';
import * as _13 from './base/query/v1beta1/pagination';
import * as _14 from './base/reflection/v2alpha1/reflection';
import * as _15 from './base/v1beta1/coin';
import * as _16 from './crypto/ed25519/keys';
import * as _17 from './crypto/hd/v1/hd';
import * as _18 from './crypto/keyring/v1/record';
import * as _19 from './crypto/multisig/keys';
import * as _20 from './crypto/secp256k1/keys';
import * as _21 from './crypto/secp256r1/keys';
import * as _22 from './distribution/v1beta1/distribution';
import * as _23 from './distribution/v1beta1/genesis';
import * as _24 from './distribution/v1beta1/query';
import * as _25 from './distribution/v1beta1/tx';
import * as _26 from './gov/v1/genesis';
import * as _27 from './gov/v1/gov';
import * as _28 from './gov/v1/query';
import * as _29 from './gov/v1/tx';
import * as _30 from './gov/v1beta1/genesis';
import * as _31 from './gov/v1beta1/gov';
import * as _32 from './gov/v1beta1/query';
import * as _33 from './gov/v1beta1/tx';
import * as _34 from './staking/v1beta1/authz';
import * as _35 from './staking/v1beta1/genesis';
import * as _36 from './staking/v1beta1/query';
import * as _37 from './staking/v1beta1/staking';
import * as _38 from './staking/v1beta1/tx';
import * as _39 from './tx/signing/v1beta1/signing';
import * as _40 from './tx/v1beta1/service';
import * as _41 from './tx/v1beta1/tx';
import * as _42 from './upgrade/v1beta1/query';
import * as _43 from './upgrade/v1beta1/tx';
import * as _44 from './upgrade/v1beta1/upgrade';
import * as _134 from './authz/v1beta1/tx.amino';
import * as _135 from './bank/v1beta1/tx.amino';
import * as _136 from './distribution/v1beta1/tx.amino';
import * as _137 from './gov/v1/tx.amino';
import * as _138 from './gov/v1beta1/tx.amino';
import * as _139 from './staking/v1beta1/tx.amino';
import * as _140 from './upgrade/v1beta1/tx.amino';
import * as _141 from './authz/v1beta1/tx.registry';
import * as _142 from './bank/v1beta1/tx.registry';
import * as _143 from './distribution/v1beta1/tx.registry';
import * as _144 from './gov/v1/tx.registry';
import * as _145 from './gov/v1beta1/tx.registry';
import * as _146 from './staking/v1beta1/tx.registry';
import * as _147 from './upgrade/v1beta1/tx.registry';
import * as _148 from './authz/v1beta1/query.lcd';
import * as _149 from './bank/v1beta1/query.lcd';
import * as _150 from './distribution/v1beta1/query.lcd';
import * as _151 from './gov/v1/query.lcd';
import * as _152 from './gov/v1beta1/query.lcd';
import * as _153 from './staking/v1beta1/query.lcd';
import * as _154 from './tx/v1beta1/service.lcd';
import * as _155 from './upgrade/v1beta1/query.lcd';
import * as _156 from './authz/v1beta1/query.rpc.query';
import * as _157 from './bank/v1beta1/query.rpc.query';
import * as _158 from './distribution/v1beta1/query.rpc.query';
import * as _159 from './gov/v1/query.rpc.query';
import * as _160 from './gov/v1beta1/query.rpc.query';
import * as _161 from './staking/v1beta1/query.rpc.query';
import * as _162 from './tx/v1beta1/service.rpc.svc';
import * as _163 from './upgrade/v1beta1/query.rpc.query';
import * as _164 from './authz/v1beta1/tx.rpc.msg';
import * as _165 from './bank/v1beta1/tx.rpc.msg';
import * as _166 from './distribution/v1beta1/tx.rpc.msg';
import * as _167 from './gov/v1/tx.rpc.msg';
import * as _168 from './gov/v1beta1/tx.rpc.msg';
import * as _169 from './staking/v1beta1/tx.rpc.msg';
import * as _170 from './upgrade/v1beta1/tx.rpc.msg';
import * as _220 from './lcd';
import * as _221 from './rpc.query';
import * as _222 from './rpc.tx';
export namespace cosmos {
  export namespace authz {
    export const v1beta1 = { ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._134,
      ..._141,
      ..._148,
      ..._156,
      ..._164
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._135,
      ..._142,
      ..._149,
      ..._157,
      ..._165
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._12
      };
    }
    export namespace query {
      export const v1beta1 = { ..._13
      };
    }
    export namespace reflection {
      export const v2alpha1 = { ..._14
      };
    }
    export const v1beta1 = { ..._15
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._16
    };
    export namespace hd {
      export const v1 = { ..._17
      };
    }
    export namespace keyring {
      export const v1 = { ..._18
      };
    }
    export const multisig = { ..._19
    };
    export const secp256k1 = { ..._20
    };
    export const secp256r1 = { ..._21
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._136,
      ..._143,
      ..._150,
      ..._158,
      ..._166
    };
  }
  export namespace gov {
    export const v1 = { ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._137,
      ..._144,
      ..._151,
      ..._159,
      ..._167
    };
    export const v1beta1 = { ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._138,
      ..._145,
      ..._152,
      ..._160,
      ..._168
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._139,
      ..._146,
      ..._153,
      ..._161,
      ..._169
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._39
      };
    }
    export const v1beta1 = { ..._40,
      ..._41,
      ..._154,
      ..._162
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._42,
      ..._43,
      ..._44,
      ..._140,
      ..._147,
      ..._155,
      ..._163,
      ..._170
    };
  }
  export const ClientFactory = { ..._220,
    ..._221,
    ..._222
  };
}