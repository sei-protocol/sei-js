import * as _82 from "./seichain/dex/asset_list";
import * as _83 from "./seichain/dex/contract";
import * as _84 from "./seichain/dex/enums";
import * as _85 from "./seichain/dex/genesis";
import * as _86 from "./seichain/dex/gov";
import * as _87 from "./seichain/dex/long_book";
import * as _88 from "./seichain/dex/match_result";
import * as _89 from "./seichain/dex/order_entry";
import * as _90 from "./seichain/dex/order";
import * as _91 from "./seichain/dex/pair";
import * as _92 from "./seichain/dex/params";
import * as _93 from "./seichain/dex/price";
import * as _94 from "./seichain/dex/query";
import * as _95 from "./seichain/dex/settlement";
import * as _96 from "./seichain/dex/short_book";
import * as _97 from "./seichain/dex/tick_size";
import * as _98 from "./seichain/dex/twap";
import * as _99 from "./seichain/dex/tx";
import * as _100 from "./seichain/epoch/epoch";
import * as _101 from "./seichain/epoch/genesis";
import * as _102 from "./seichain/epoch/params";
import * as _103 from "./seichain/epoch/query";
import * as _104 from "./seichain/epoch/tx";
import * as _105 from "./seichain/mint/v1beta1/genesis";
import * as _106 from "./seichain/mint/v1beta1/mint";
import * as _107 from "./seichain/mint/v1beta1/query";
import * as _108 from "./seichain/nitro/data";
import * as _109 from "./seichain/nitro/genesis";
import * as _110 from "./seichain/nitro/params";
import * as _111 from "./seichain/nitro/query";
import * as _112 from "./seichain/nitro/tx";
import * as _113 from "./seichain/oracle/genesis";
import * as _114 from "./seichain/oracle/oracle";
import * as _115 from "./seichain/oracle/query";
import * as _116 from "./seichain/oracle/tx";
import * as _117 from "./seichain/tokenfactory/authorityMetadata";
import * as _118 from "./seichain/tokenfactory/genesis";
import * as _119 from "./seichain/tokenfactory/gov";
import * as _120 from "./seichain/tokenfactory/params";
import * as _121 from "./seichain/tokenfactory/query";
import * as _122 from "./seichain/tokenfactory/tx";
import * as _196 from "./seichain/dex/tx.amino";
import * as _197 from "./seichain/nitro/tx.amino";
import * as _198 from "./seichain/oracle/tx.amino";
import * as _199 from "./seichain/tokenfactory/tx.amino";
import * as _200 from "./seichain/dex/tx.registry";
import * as _201 from "./seichain/nitro/tx.registry";
import * as _202 from "./seichain/oracle/tx.registry";
import * as _203 from "./seichain/tokenfactory/tx.registry";
import * as _204 from "./seichain/dex/query.lcd";
import * as _205 from "./seichain/epoch/query.lcd";
import * as _206 from "./seichain/mint/v1beta1/query.lcd";
import * as _207 from "./seichain/nitro/query.lcd";
import * as _208 from "./seichain/oracle/query.lcd";
import * as _209 from "./seichain/tokenfactory/query.lcd";
import * as _210 from "./seichain/dex/query.rpc.query";
import * as _211 from "./seichain/epoch/query.rpc.query";
import * as _212 from "./seichain/mint/v1beta1/query.rpc.query";
import * as _213 from "./seichain/nitro/query.rpc.query";
import * as _214 from "./seichain/oracle/query.rpc.query";
import * as _215 from "./seichain/tokenfactory/query.rpc.query";
import * as _216 from "./seichain/dex/tx.rpc.msg";
import * as _217 from "./seichain/nitro/tx.rpc.msg";
import * as _218 from "./seichain/oracle/tx.rpc.msg";
import * as _219 from "./seichain/tokenfactory/tx.rpc.msg";
import * as _229 from "./lcd";
import * as _230 from "./rpc.query";
import * as _231 from "./rpc.tx";
export namespace seiprotocol {
  export namespace seichain {
    export const dex = { ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._196,
      ..._200,
      ..._204,
      ..._210,
      ..._216
    };
    export const epoch = { ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._205,
      ..._211
    };
    export const mint = { ..._105,
      ..._106,
      ..._107,
      ..._206,
      ..._212
    };
    export const nitro = { ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._112,
      ..._197,
      ..._201,
      ..._207,
      ..._213,
      ..._217
    };
    export const oracle = { ..._113,
      ..._114,
      ..._115,
      ..._116,
      ..._198,
      ..._202,
      ..._208,
      ..._214,
      ..._218
    };
    export const tokenfactory = { ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._121,
      ..._122,
      ..._199,
      ..._203,
      ..._209,
      ..._215,
      ..._219
    };
  }
  export const ClientFactory = { ..._229,
    ..._230,
    ..._231
  };
}