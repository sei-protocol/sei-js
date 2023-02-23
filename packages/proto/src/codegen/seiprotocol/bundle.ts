import * as _135 from "./seichain/dex/asset_list";
import * as _136 from "./seichain/dex/contract";
import * as _137 from "./seichain/dex/enums";
import * as _138 from "./seichain/dex/genesis";
import * as _139 from "./seichain/dex/gov";
import * as _140 from "./seichain/dex/long_book";
import * as _141 from "./seichain/dex/match_result";
import * as _142 from "./seichain/dex/order_entry";
import * as _143 from "./seichain/dex/order";
import * as _144 from "./seichain/dex/pair";
import * as _145 from "./seichain/dex/params";
import * as _146 from "./seichain/dex/price";
import * as _147 from "./seichain/dex/query";
import * as _148 from "./seichain/dex/settlement";
import * as _149 from "./seichain/dex/short_book";
import * as _150 from "./seichain/dex/tick_size";
import * as _151 from "./seichain/dex/twap";
import * as _152 from "./seichain/dex/tx";
import * as _153 from "./seichain/epoch/epoch";
import * as _154 from "./seichain/epoch/genesis";
import * as _155 from "./seichain/epoch/params";
import * as _156 from "./seichain/epoch/query";
import * as _157 from "./seichain/epoch/tx";
import * as _158 from "./seichain/mint/v1beta1/genesis";
import * as _159 from "./seichain/mint/v1beta1/mint";
import * as _160 from "./seichain/mint/v1beta1/query";
import * as _161 from "./seichain/nitro/data";
import * as _162 from "./seichain/nitro/genesis";
import * as _163 from "./seichain/nitro/params";
import * as _164 from "./seichain/nitro/query";
import * as _165 from "./seichain/nitro/tx";
import * as _166 from "./seichain/oracle/genesis";
import * as _167 from "./seichain/oracle/oracle";
import * as _168 from "./seichain/oracle/query";
import * as _169 from "./seichain/oracle/tx";
import * as _170 from "./seichain/tokenfactory/authorityMetadata";
import * as _171 from "./seichain/tokenfactory/genesis";
import * as _172 from "./seichain/tokenfactory/gov";
import * as _173 from "./seichain/tokenfactory/params";
import * as _174 from "./seichain/tokenfactory/query";
import * as _175 from "./seichain/tokenfactory/tx";
import * as _290 from "./seichain/dex/tx.amino";
import * as _291 from "./seichain/nitro/tx.amino";
import * as _292 from "./seichain/oracle/tx.amino";
import * as _293 from "./seichain/tokenfactory/tx.amino";
import * as _294 from "./seichain/dex/tx.registry";
import * as _295 from "./seichain/nitro/tx.registry";
import * as _296 from "./seichain/oracle/tx.registry";
import * as _297 from "./seichain/tokenfactory/tx.registry";
import * as _298 from "./seichain/dex/query.lcd";
import * as _299 from "./seichain/epoch/query.lcd";
import * as _300 from "./seichain/mint/v1beta1/query.lcd";
import * as _301 from "./seichain/nitro/query.lcd";
import * as _302 from "./seichain/oracle/query.lcd";
import * as _303 from "./seichain/tokenfactory/query.lcd";
import * as _304 from "./seichain/dex/query.rpc.query";
import * as _305 from "./seichain/epoch/query.rpc.query";
import * as _306 from "./seichain/mint/v1beta1/query.rpc.query";
import * as _307 from "./seichain/nitro/query.rpc.query";
import * as _308 from "./seichain/oracle/query.rpc.query";
import * as _309 from "./seichain/tokenfactory/query.rpc.query";
import * as _310 from "./seichain/dex/tx.rpc.msg";
import * as _311 from "./seichain/nitro/tx.rpc.msg";
import * as _312 from "./seichain/oracle/tx.rpc.msg";
import * as _313 from "./seichain/tokenfactory/tx.rpc.msg";
import * as _323 from "./lcd";
import * as _324 from "./rpc.query";
import * as _325 from "./rpc.tx";
export namespace seiprotocol {
  export namespace seichain {
    export const dex = { ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._290,
      ..._294,
      ..._298,
      ..._304,
      ..._310
    };
    export const epoch = { ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._299,
      ..._305
    };
    export const mint = { ..._158,
      ..._159,
      ..._160,
      ..._300,
      ..._306
    };
    export const nitro = { ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._291,
      ..._295,
      ..._301,
      ..._307,
      ..._311
    };
    export const oracle = { ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._292,
      ..._296,
      ..._302,
      ..._308,
      ..._312
    };
    export const tokenfactory = { ..._170,
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._293,
      ..._297,
      ..._303,
      ..._309,
      ..._313
    };
  }
  export const ClientFactory = { ..._323,
    ..._324,
    ..._325
  };
}