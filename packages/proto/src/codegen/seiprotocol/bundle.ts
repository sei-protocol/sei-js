import * as _47 from '../dex/asset_list';
import * as _48 from '../dex/contract';
import * as _49 from '../dex/deposit';
import * as _50 from '../dex/enums';
import * as _51 from '../dex/genesis';
import * as _52 from '../dex/gov';
import * as _53 from '../dex/long_book';
import * as _54 from '../dex/match_result';
import * as _55 from '../dex/order_entry';
import * as _56 from '../dex/order';
import * as _57 from '../dex/pair';
import * as _58 from '../dex/params';
import * as _59 from '../dex/price';
import * as _60 from '../dex/query';
import * as _61 from '../dex/settlement';
import * as _62 from '../dex/short_book';
import * as _63 from '../dex/tick_size';
import * as _64 from '../dex/twap';
import * as _65 from '../dex/tx';
import * as _66 from '../epoch/epoch';
import * as _67 from '../epoch/genesis';
import * as _68 from '../epoch/params';
import * as _69 from '../epoch/query';
import * as _70 from '../epoch/tx';
import * as _71 from '../eth/tx';
import * as _72 from '../evm/config';
import * as _73 from '../evm/enums';
import * as _74 from '../evm/genesis';
import * as _75 from '../evm/gov';
import * as _76 from '../evm/params';
import * as _77 from '../evm/query';
import * as _78 from '../evm/receipt';
import * as _79 from '../evm/tx';
import * as _80 from '../evm/types';
import * as _81 from '../mint/v1beta1/genesis';
import * as _82 from '../mint/v1beta1/gov';
import * as _83 from '../mint/v1beta1/mint';
import * as _84 from '../mint/v1beta1/query';
import * as _85 from '../oracle/genesis';
import * as _86 from '../oracle/oracle';
import * as _87 from '../oracle/query';
import * as _88 from '../oracle/tx';
import * as _89 from '../tokenfactory/authorityMetadata';
import * as _90 from '../tokenfactory/genesis';
import * as _91 from '../tokenfactory/params';
import * as _92 from '../tokenfactory/query';
import * as _93 from '../tokenfactory/tx';
import * as _167 from '../dex/tx.amino';
import * as _168 from '../evm/tx.amino';
import * as _169 from '../oracle/tx.amino';
import * as _170 from '../tokenfactory/tx.amino';
import * as _171 from '../dex/tx.registry';
import * as _172 from '../evm/tx.registry';
import * as _173 from '../oracle/tx.registry';
import * as _174 from '../tokenfactory/tx.registry';
import * as _175 from '../dex/query.lcd';
import * as _176 from '../epoch/query.lcd';
import * as _177 from '../evm/query.lcd';
import * as _178 from '../mint/v1beta1/query.lcd';
import * as _179 from '../oracle/query.lcd';
import * as _180 from '../tokenfactory/query.lcd';
import * as _181 from '../dex/query.rpc.Query';
import * as _182 from '../epoch/query.rpc.Query';
import * as _183 from '../evm/query.rpc.Query';
import * as _184 from '../mint/v1beta1/query.rpc.Query';
import * as _185 from '../oracle/query.rpc.Query';
import * as _186 from '../tokenfactory/query.rpc.Query';
import * as _187 from '../dex/tx.rpc.msg';
import * as _188 from '../evm/tx.rpc.msg';
import * as _189 from '../oracle/tx.rpc.msg';
import * as _190 from '../tokenfactory/tx.rpc.msg';
import * as _217 from './lcd';
import * as _218 from './rpc.query';
import * as _219 from './rpc.tx';
export namespace seiprotocol {
	export namespace seichain {
		export const dex = {
			..._47,
			..._48,
			..._49,
			..._50,
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
			..._167,
			..._171,
			..._175,
			..._181,
			..._187
		};
		export const epoch = {
			..._66,
			..._67,
			..._68,
			..._69,
			..._70,
			..._176,
			..._182
		};
		export const eth = {
			..._71
		};
		export const evm = {
			..._72,
			..._73,
			..._74,
			..._75,
			..._76,
			..._77,
			..._78,
			..._79,
			..._80,
			..._168,
			..._172,
			..._177,
			..._183,
			..._188
		};
		export const mint = {
			..._81,
			..._82,
			..._83,
			..._84,
			..._178,
			..._184
		};
		export const oracle = {
			..._85,
			..._86,
			..._87,
			..._88,
			..._169,
			..._173,
			..._179,
			..._185,
			..._189
		};
		export const tokenfactory = {
			..._89,
			..._90,
			..._91,
			..._92,
			..._93,
			..._170,
			..._174,
			..._180,
			..._186,
			..._190
		};
	}
	export const ClientFactory = {
		..._217,
		..._218,
		..._219
	};
}
