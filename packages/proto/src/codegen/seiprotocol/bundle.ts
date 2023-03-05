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
import * as _247 from "./seichain/dex/tx.amino";
import * as _248 from "./seichain/nitro/tx.amino";
import * as _249 from "./seichain/oracle/tx.amino";
import * as _250 from "./seichain/tokenfactory/tx.amino";
import * as _251 from "./seichain/dex/tx.registry";
import * as _252 from "./seichain/nitro/tx.registry";
import * as _253 from "./seichain/oracle/tx.registry";
import * as _254 from "./seichain/tokenfactory/tx.registry";
import * as _255 from "./seichain/dex/query.lcd";
import * as _256 from "./seichain/epoch/query.lcd";
import * as _257 from "./seichain/mint/v1beta1/query.lcd";
import * as _258 from "./seichain/nitro/query.lcd";
import * as _259 from "./seichain/oracle/query.lcd";
import * as _260 from "./seichain/tokenfactory/query.lcd";
import * as _264 from "./lcd";
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
      ..._247,
      ..._251,
      ..._255
    };
    export const epoch = { ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._256
    };
    export const mint = { ..._158,
      ..._159,
      ..._160,
      ..._257
    };
    export const nitro = { ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._248,
      ..._252,
      ..._258
    };
    export const oracle = { ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._249,
      ..._253,
      ..._259
    };
    export const tokenfactory = { ..._170,
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._250,
      ..._254,
      ..._260
    };
  }
  export const ClientFactory = { ..._264
  };
}