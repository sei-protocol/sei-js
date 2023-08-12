import * as _78 from "./seichain/dex/asset_list";
import * as _79 from "./seichain/dex/contract";
import * as _80 from "./seichain/dex/deposit";
import * as _81 from "./seichain/dex/enums";
import * as _82 from "./seichain/dex/genesis";
import * as _83 from "./seichain/dex/gov";
import * as _84 from "./seichain/dex/long_book";
import * as _85 from "./seichain/dex/match_result";
import * as _86 from "./seichain/dex/order_entry";
import * as _87 from "./seichain/dex/order";
import * as _88 from "./seichain/dex/pair";
import * as _89 from "./seichain/dex/params";
import * as _90 from "./seichain/dex/price";
import * as _91 from "./seichain/dex/query";
import * as _92 from "./seichain/dex/settlement";
import * as _93 from "./seichain/dex/short_book";
import * as _94 from "./seichain/dex/tick_size";
import * as _95 from "./seichain/dex/twap";
import * as _96 from "./seichain/dex/tx";
import * as _97 from "./seichain/epoch/epoch";
import * as _98 from "./seichain/epoch/genesis";
import * as _99 from "./seichain/epoch/params";
import * as _100 from "./seichain/epoch/query";
import * as _101 from "./seichain/epoch/tx";
import * as _102 from "./seichain/mint/v1beta1/genesis";
import * as _103 from "./seichain/mint/v1beta1/gov";
import * as _104 from "./seichain/mint/v1beta1/mint";
import * as _105 from "./seichain/mint/v1beta1/query";
import * as _106 from "./seichain/oracle/genesis";
import * as _107 from "./seichain/oracle/oracle";
import * as _108 from "./seichain/oracle/query";
import * as _109 from "./seichain/oracle/tx";
import * as _110 from "./seichain/tokenfactory/authorityMetadata";
import * as _111 from "./seichain/tokenfactory/genesis";
import * as _112 from "./seichain/tokenfactory/params";
import * as _113 from "./seichain/tokenfactory/query";
import * as _114 from "./seichain/tokenfactory/tx";
import * as _185 from "./seichain/dex/tx.amino";
import * as _186 from "./seichain/oracle/tx.amino";
import * as _187 from "./seichain/tokenfactory/tx.amino";
import * as _188 from "./seichain/dex/tx.registry";
import * as _189 from "./seichain/oracle/tx.registry";
import * as _190 from "./seichain/tokenfactory/tx.registry";
import * as _191 from "./seichain/dex/query.lcd";
import * as _192 from "./seichain/epoch/query.lcd";
import * as _193 from "./seichain/mint/v1beta1/query.lcd";
import * as _194 from "./seichain/oracle/query.lcd";
import * as _195 from "./seichain/tokenfactory/query.lcd";
import * as _196 from "./seichain/dex/query.rpc.Query";
import * as _197 from "./seichain/epoch/query.rpc.Query";
import * as _198 from "./seichain/mint/v1beta1/query.rpc.Query";
import * as _199 from "./seichain/oracle/query.rpc.Query";
import * as _200 from "./seichain/tokenfactory/query.rpc.Query";
import * as _201 from "./seichain/dex/tx.rpc.msg";
import * as _202 from "./seichain/oracle/tx.rpc.msg";
import * as _203 from "./seichain/tokenfactory/tx.rpc.msg";
import * as _213 from "./lcd";
import * as _214 from "./rpc.query";
import * as _215 from "./rpc.tx";
export namespace seiprotocol {
  export namespace seichain {
    export const dex = {
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._82,
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
      ..._185,
      ..._188,
      ..._191,
      ..._196,
      ..._201
    };
    export const epoch = {
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._192,
      ..._197
    };
    export const mint = {
      ..._102,
      ..._103,
      ..._104,
      ..._105,
      ..._193,
      ..._198
    };
    export const oracle = {
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._186,
      ..._189,
      ..._194,
      ..._199,
      ..._202
    };
    export const tokenfactory = {
      ..._110,
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._187,
      ..._190,
      ..._195,
      ..._200,
      ..._203
    };
  }
  export const ClientFactory = {
    ..._213,
    ..._214,
    ..._215
  };
}