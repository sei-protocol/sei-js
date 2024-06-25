import * as _72 from '../epoch/epoch';
import * as _73 from '../epoch/genesis';
import * as _74 from '../epoch/params';
import * as _75 from '../epoch/query';
import * as _76 from '../epoch/tx';
import * as _77 from '../eth/tx';
import * as _78 from '../evm/config';
import * as _79 from '../evm/enums';
import * as _80 from '../evm/genesis';
import * as _81 from '../evm/gov';
import * as _82 from '../evm/params';
import * as _83 from '../evm/query';
import * as _84 from '../evm/receipt';
import * as _85 from '../evm/tx';
import * as _86 from '../evm/types';
import * as _87 from '../mint/v1beta1/genesis';
import * as _88 from '../mint/v1beta1/gov';
import * as _89 from '../mint/v1beta1/mint';
import * as _90 from '../mint/v1beta1/query';
import * as _91 from '../oracle/genesis';
import * as _92 from '../oracle/oracle';
import * as _93 from '../oracle/query';
import * as _94 from '../oracle/tx';
import * as _95 from '../tokenfactory/authorityMetadata';
import * as _96 from '../tokenfactory/genesis';
import * as _97 from '../tokenfactory/params';
import * as _98 from '../tokenfactory/query';
import * as _99 from '../tokenfactory/tx';
import * as _200 from '../evm/tx.amino';
import * as _201 from '../oracle/tx.amino';
import * as _202 from '../tokenfactory/tx.amino';
import * as _203 from '../evm/tx.registry';
import * as _204 from '../oracle/tx.registry';
import * as _205 from '../tokenfactory/tx.registry';
import * as _206 from '../epoch/query.lcd';
import * as _207 from '../evm/query.lcd';
import * as _208 from '../mint/v1beta1/query.lcd';
import * as _209 from '../oracle/query.lcd';
import * as _210 from '../tokenfactory/query.lcd';
import * as _211 from '../epoch/query.rpc.Query';
import * as _212 from '../evm/query.rpc.Query';
import * as _213 from '../mint/v1beta1/query.rpc.Query';
import * as _214 from '../oracle/query.rpc.Query';
import * as _215 from '../tokenfactory/query.rpc.Query';
import * as _216 from '../evm/tx.rpc.msg';
import * as _217 from '../oracle/tx.rpc.msg';
import * as _218 from '../tokenfactory/tx.rpc.msg';
import * as _246 from './lcd';
import * as _247 from './rpc.query';
import * as _248 from './rpc.tx';
export namespace seiprotocol {
	export namespace seichain {
		export const epoch = {
			..._72,
			..._73,
			..._74,
			..._75,
			..._76,
			..._206,
			..._211
		};
		export const eth = {
			..._77
		};
		export const evm = {
			..._78,
			..._79,
			..._80,
			..._81,
			..._82,
			..._83,
			..._84,
			..._85,
			..._86,
			..._200,
			..._203,
			..._207,
			..._212,
			..._216
		};
		export const mint = {
			..._87,
			..._88,
			..._89,
			..._90,
			..._208,
			..._213
		};
		export const oracle = {
			..._91,
			..._92,
			..._93,
			..._94,
			..._201,
			..._204,
			..._209,
			..._214,
			..._217
		};
		export const tokenfactory = {
			..._95,
			..._96,
			..._97,
			..._98,
			..._99,
			..._202,
			..._205,
			..._210,
			..._215,
			..._218
		};
	}
	export const ClientFactory = {
		..._246,
		..._247,
		..._248
	};
}
