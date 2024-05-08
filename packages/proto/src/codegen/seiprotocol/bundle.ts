import * as _51 from '../dex/asset_list';
import * as _52 from '../dex/contract';
import * as _53 from '../dex/deposit';
import * as _54 from '../dex/enums';
import * as _55 from '../dex/genesis';
import * as _56 from '../dex/gov';
import * as _57 from '../dex/long_book';
import * as _58 from '../dex/match_result';
import * as _59 from '../dex/order_entry';
import * as _60 from '../dex/order';
import * as _61 from '../dex/pair';
import * as _62 from '../dex/params';
import * as _63 from '../dex/price';
import * as _64 from '../dex/query';
import * as _65 from '../dex/settlement';
import * as _66 from '../dex/short_book';
import * as _67 from '../dex/tick_size';
import * as _68 from '../dex/twap';
import * as _69 from '../dex/tx';
import * as _70 from '../epoch/epoch';
import * as _71 from '../epoch/genesis';
import * as _72 from '../epoch/params';
import * as _73 from '../epoch/query';
import * as _74 from '../epoch/tx';
import * as _75 from '../eth/tx';
import * as _76 from '../evm/config';
import * as _77 from '../evm/enums';
import * as _78 from '../evm/genesis';
import * as _79 from '../evm/gov';
import * as _80 from '../evm/params';
import * as _81 from '../evm/query';
import * as _82 from '../evm/receipt';
import * as _83 from '../evm/tx';
import * as _84 from '../evm/types';
import * as _85 from '../mint/v1beta1/genesis';
import * as _86 from '../mint/v1beta1/gov';
import * as _87 from '../mint/v1beta1/mint';
import * as _88 from '../mint/v1beta1/query';
import * as _89 from '../oracle/genesis';
import * as _90 from '../oracle/oracle';
import * as _91 from '../oracle/query';
import * as _92 from '../oracle/tx';
import * as _93 from '../tokenfactory/authorityMetadata';
import * as _94 from '../tokenfactory/genesis';
import * as _95 from '../tokenfactory/params';
import * as _96 from '../tokenfactory/query';
import * as _97 from '../tokenfactory/tx';
import * as _176 from '../dex/tx.amino';
import * as _177 from '../evm/tx.amino';
import * as _178 from '../oracle/tx.amino';
import * as _179 from '../tokenfactory/tx.amino';
import * as _180 from '../dex/tx.registry';
import * as _181 from '../evm/tx.registry';
import * as _182 from '../oracle/tx.registry';
import * as _183 from '../tokenfactory/tx.registry';
import * as _184 from '../dex/query.lcd';
import * as _185 from '../epoch/query.lcd';
import * as _186 from '../evm/query.lcd';
import * as _187 from '../mint/v1beta1/query.lcd';
import * as _188 from '../oracle/query.lcd';
import * as _189 from '../tokenfactory/query.lcd';
import * as _190 from '../dex/query.rpc.Query';
import * as _191 from '../epoch/query.rpc.Query';
import * as _192 from '../evm/query.rpc.Query';
import * as _193 from '../mint/v1beta1/query.rpc.Query';
import * as _194 from '../oracle/query.rpc.Query';
import * as _195 from '../tokenfactory/query.rpc.Query';
import * as _196 from '../dex/tx.rpc.msg';
import * as _197 from '../evm/tx.rpc.msg';
import * as _198 from '../oracle/tx.rpc.msg';
import * as _199 from '../tokenfactory/tx.rpc.msg';
import * as _226 from './lcd';
import * as _227 from './rpc.query';
import * as _228 from './rpc.tx';
export namespace seiprotocol {
	export namespace seichain {
		export const dex = {
			..._51,
			..._52,
			..._53,
			..._54,
			..._55,
			..._56,
			..._57,
			..._58,
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
			..._176,
			..._180,
			..._184,
			..._190,
			..._196
		};
		export const epoch = {
			..._70,
			..._71,
			..._72,
			..._73,
			..._74,
			..._185,
			..._191
		};
		export const eth = {
			..._75
		};
		export const evm = {
			..._76,
			..._77,
			..._78,
			..._79,
			..._80,
			..._81,
			..._82,
			..._83,
			..._84,
			..._177,
			..._181,
			..._186,
			..._192,
			..._197
		};
		export const mint = {
			..._85,
			..._86,
			..._87,
			..._88,
			..._187,
			..._193
		};
		export const oracle = {
			..._89,
			..._90,
			..._91,
			..._92,
			..._178,
			..._182,
			..._188,
			..._194,
			..._198
		};
		export const tokenfactory = {
			..._93,
			..._94,
			..._95,
			..._96,
			..._97,
			..._179,
			..._183,
			..._189,
			..._195,
			..._199
		};
	}
	export const ClientFactory = {
		..._226,
		..._227,
		..._228
	};
}
