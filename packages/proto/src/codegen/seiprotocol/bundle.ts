import * as _59 from '../dex/asset_list';
import * as _60 from '../dex/contract';
import * as _61 from '../dex/deposit';
import * as _62 from '../dex/enums';
import * as _63 from '../dex/genesis';
import * as _64 from '../dex/gov';
import * as _65 from '../dex/long_book';
import * as _66 from '../dex/match_result';
import * as _67 from '../dex/order_entry';
import * as _68 from '../dex/order';
import * as _69 from '../dex/pair';
import * as _70 from '../dex/params';
import * as _71 from '../dex/price';
import * as _72 from '../dex/query';
import * as _73 from '../dex/settlement';
import * as _74 from '../dex/short_book';
import * as _75 from '../dex/tick_size';
import * as _76 from '../dex/twap';
import * as _77 from '../dex/tx';
import * as _78 from '../epoch/epoch';
import * as _79 from '../epoch/genesis';
import * as _80 from '../epoch/params';
import * as _81 from '../epoch/query';
import * as _82 from '../epoch/tx';
import * as _83 from '../eth/tx';
import * as _84 from '../evm/config';
import * as _85 from '../evm/enums';
import * as _86 from '../evm/genesis';
import * as _87 from '../evm/gov';
import * as _88 from '../evm/params';
import * as _89 from '../evm/query';
import * as _90 from '../evm/receipt';
import * as _91 from '../evm/tx';
import * as _92 from '../evm/types';
import * as _93 from '../mint/v1beta1/genesis';
import * as _94 from '../mint/v1beta1/gov';
import * as _95 from '../mint/v1beta1/mint';
import * as _96 from '../mint/v1beta1/query';
import * as _97 from '../oracle/genesis';
import * as _98 from '../oracle/oracle';
import * as _99 from '../oracle/query';
import * as _100 from '../oracle/tx';
import * as _101 from '../tokenfactory/authorityMetadata';
import * as _102 from '../tokenfactory/genesis';
import * as _103 from '../tokenfactory/params';
import * as _104 from '../tokenfactory/query';
import * as _105 from '../tokenfactory/tx';
import * as _189 from '../dex/tx.amino';
import * as _190 from '../evm/tx.amino';
import * as _191 from '../oracle/tx.amino';
import * as _192 from '../tokenfactory/tx.amino';
import * as _193 from '../dex/tx.registry';
import * as _194 from '../evm/tx.registry';
import * as _195 from '../oracle/tx.registry';
import * as _196 from '../tokenfactory/tx.registry';
import * as _197 from '../dex/query.lcd';
import * as _198 from '../epoch/query.lcd';
import * as _199 from '../evm/query.lcd';
import * as _200 from '../mint/v1beta1/query.lcd';
import * as _201 from '../oracle/query.lcd';
import * as _202 from '../tokenfactory/query.lcd';
import * as _203 from '../dex/query.rpc.Query';
import * as _204 from '../epoch/query.rpc.Query';
import * as _205 from '../evm/query.rpc.Query';
import * as _206 from '../mint/v1beta1/query.rpc.Query';
import * as _207 from '../oracle/query.rpc.Query';
import * as _208 from '../tokenfactory/query.rpc.Query';
import * as _209 from '../dex/tx.rpc.msg';
import * as _210 from '../evm/tx.rpc.msg';
import * as _211 from '../oracle/tx.rpc.msg';
import * as _212 from '../tokenfactory/tx.rpc.msg';
import * as _239 from './lcd';
import * as _240 from './rpc.query';
import * as _241 from './rpc.tx';
export namespace seiprotocol {
	export namespace seichain {
		export const dex = {
			..._59,
			..._60,
			..._61,
			..._62,
			..._63,
			..._64,
			..._65,
			..._66,
			..._67,
			..._68,
			..._69,
			..._70,
			..._71,
			..._72,
			..._73,
			..._74,
			..._75,
			..._76,
			..._77,
			..._189,
			..._193,
			..._197,
			..._203,
			..._209
		};
		export const epoch = {
			..._78,
			..._79,
			..._80,
			..._81,
			..._82,
			..._198,
			..._204
		};
		export const eth = {
			..._83
		};
		export const evm = {
			..._84,
			..._85,
			..._86,
			..._87,
			..._88,
			..._89,
			..._90,
			..._91,
			..._92,
			..._190,
			..._194,
			..._199,
			..._205,
			..._210
		};
		export const mint = {
			..._93,
			..._94,
			..._95,
			..._96,
			..._200,
			..._206
		};
		export const oracle = {
			..._97,
			..._98,
			..._99,
			..._100,
			..._191,
			..._195,
			..._201,
			..._207,
			..._211
		};
		export const tokenfactory = {
			..._101,
			..._102,
			..._103,
			..._104,
			..._105,
			..._192,
			..._196,
			..._202,
			..._208,
			..._212
		};
	}
	export const ClientFactory = {
		..._239,
		..._240,
		..._241
	};
}
