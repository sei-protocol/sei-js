import * as _65 from './wasm/v1/authz';
import * as _66 from './wasm/v1/genesis';
import * as _67 from './wasm/v1/ibc';
import * as _68 from './wasm/v1/proposal';
import * as _69 from './wasm/v1/query';
import * as _70 from './wasm/v1/tx';
import * as _71 from './wasm/v1/types';
import * as _195 from './wasm/v1/tx.amino';
import * as _196 from './wasm/v1/tx.registry';
import * as _197 from './wasm/v1/query.lcd';
import * as _198 from './wasm/v1/query.rpc.Query';
import * as _199 from './wasm/v1/tx.rpc.msg';
import * as _243 from './lcd';
import * as _244 from './rpc.query';
import * as _245 from './rpc.tx';
export namespace cosmwasm {
	export namespace wasm {
		export const v1 = {
			..._65,
			..._66,
			..._67,
			..._68,
			..._69,
			..._70,
			..._71,
			..._195,
			..._196,
			..._197,
			..._198,
			..._199
		};
	}
	export const ClientFactory = {
		..._243,
		..._244,
		..._245
	};
}
