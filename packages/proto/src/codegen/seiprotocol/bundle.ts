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
import * as _71 from '../mint/v1beta1/genesis';
import * as _72 from '../mint/v1beta1/gov';
import * as _73 from '../mint/v1beta1/mint';
import * as _74 from '../mint/v1beta1/query';
import * as _75 from '../oracle/genesis';
import * as _76 from '../oracle/oracle';
import * as _77 from '../oracle/query';
import * as _78 from '../oracle/tx';
import * as _79 from '../tokenfactory/authorityMetadata';
import * as _80 from '../tokenfactory/genesis';
import * as _81 from '../tokenfactory/params';
import * as _82 from '../tokenfactory/query';
import * as _83 from '../tokenfactory/tx';
import * as _157 from '../dex/tx.amino';
import * as _158 from '../oracle/tx.amino';
import * as _159 from '../tokenfactory/tx.amino';
import * as _160 from '../dex/tx.registry';
import * as _161 from '../oracle/tx.registry';
import * as _162 from '../tokenfactory/tx.registry';
import * as _163 from '../dex/query.lcd';
import * as _164 from '../epoch/query.lcd';
import * as _165 from '../mint/v1beta1/query.lcd';
import * as _166 from '../oracle/query.lcd';
import * as _167 from '../tokenfactory/query.lcd';
import * as _168 from '../dex/query.rpc.Query';
import * as _169 from '../epoch/query.rpc.Query';
import * as _170 from '../mint/v1beta1/query.rpc.Query';
import * as _171 from '../oracle/query.rpc.Query';
import * as _172 from '../tokenfactory/query.rpc.Query';
import * as _173 from '../dex/tx.rpc.msg';
import * as _174 from '../oracle/tx.rpc.msg';
import * as _175 from '../tokenfactory/tx.rpc.msg';
import * as _202 from './lcd';
import * as _203 from './rpc.query';
import * as _204 from './rpc.tx';
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
			..._157,
			..._160,
			..._163,
			..._168,
			..._173
		};
		export const epoch = {
			..._66,
			..._67,
			..._68,
			..._69,
			..._70,
			..._164,
			..._169
		};
		export const mint = {
			..._71,
			..._72,
			..._73,
			..._74,
			..._165,
			..._170
		};
		export const oracle = {
			..._75,
			..._76,
			..._77,
			..._78,
			..._158,
			..._161,
			..._166,
			..._171,
			..._174
		};
		export const tokenfactory = {
			..._79,
			..._80,
			..._81,
			..._82,
			..._83,
			..._159,
			..._162,
			..._167,
			..._172,
			..._175
		};
	}
	export const ClientFactory = {
		..._202,
		..._203,
		..._204
	};
}
