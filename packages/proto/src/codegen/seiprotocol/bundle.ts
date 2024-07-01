import * as _73 from '../epoch/epoch';
import * as _74 from '../epoch/genesis';
import * as _75 from '../epoch/params';
import * as _76 from '../epoch/query';
import * as _77 from '../epoch/tx';
import * as _78 from '../eth/tx';
import * as _79 from '../evm/config';
import * as _80 from '../evm/enums';
import * as _81 from '../evm/genesis';
import * as _82 from '../evm/gov';
import * as _83 from '../evm/params';
import * as _84 from '../evm/query';
import * as _85 from '../evm/receipt';
import * as _86 from '../evm/tx';
import * as _87 from '../evm/types';
import * as _88 from '../mint/v1beta1/genesis';
import * as _89 from '../mint/v1beta1/gov';
import * as _90 from '../mint/v1beta1/mint';
import * as _91 from '../mint/v1beta1/query';
import * as _92 from '../oracle/genesis';
import * as _93 from '../oracle/oracle';
import * as _94 from '../oracle/query';
import * as _95 from '../oracle/tx';
import * as _96 from '../tokenfactory/authorityMetadata';
import * as _97 from '../tokenfactory/genesis';
import * as _98 from '../tokenfactory/params';
import * as _99 from '../tokenfactory/query';
import * as _100 from '../tokenfactory/tx';
import * as _203 from '../evm/tx.amino';
import * as _204 from '../oracle/tx.amino';
import * as _205 from '../tokenfactory/tx.amino';
import * as _206 from '../evm/tx.registry';
import * as _207 from '../oracle/tx.registry';
import * as _208 from '../tokenfactory/tx.registry';
import * as _209 from '../epoch/query.lcd';
import * as _210 from '../evm/query.lcd';
import * as _211 from '../mint/v1beta1/query.lcd';
import * as _212 from '../oracle/query.lcd';
import * as _213 from '../tokenfactory/query.lcd';
import * as _214 from '../epoch/query.rpc.Query';
import * as _215 from '../evm/query.rpc.Query';
import * as _216 from '../mint/v1beta1/query.rpc.Query';
import * as _217 from '../oracle/query.rpc.Query';
import * as _218 from '../tokenfactory/query.rpc.Query';
import * as _219 from '../evm/tx.rpc.msg';
import * as _220 from '../oracle/tx.rpc.msg';
import * as _221 from '../tokenfactory/tx.rpc.msg';
import * as _249 from './lcd';
import * as _250 from './rpc.query';
import * as _251 from './rpc.tx';
export namespace seiprotocol {
	export namespace seichain {
		export const epoch = {
			..._73,
			..._74,
			..._75,
			..._76,
			..._77,
			..._209,
			..._214
		};
		export const eth = {
			..._78
		};
		export const evm = {
			..._79,
			..._80,
			..._81,
			..._82,
			..._83,
			..._84,
			..._85,
			..._86,
			..._87,
			..._203,
			..._206,
			..._210,
			..._215,
			..._219
		};
		export const mint = {
			..._88,
			..._89,
			..._90,
			..._91,
			..._211,
			..._216
		};
		export const oracle = {
			..._92,
			..._93,
			..._94,
			..._95,
			..._204,
			..._207,
			..._212,
			..._217,
			..._220
		};
		export const tokenfactory = {
			..._96,
			..._97,
			..._98,
			..._99,
			..._100,
			..._205,
			..._208,
			..._213,
			..._218,
			..._221
		};
	}
	export const ClientFactory = {
		..._249,
		..._250,
		..._251
	};
}
