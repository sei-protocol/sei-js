import * as _66 from './wasm/v1/authz';
import * as _67 from './wasm/v1/genesis';
import * as _68 from './wasm/v1/ibc';
import * as _69 from './wasm/v1/proposal';
import * as _70 from './wasm/v1/query';
import * as _71 from './wasm/v1/tx';
import * as _72 from './wasm/v1/types';
import * as _198 from './wasm/v1/tx.amino';
import * as _199 from './wasm/v1/tx.registry';
import * as _200 from './wasm/v1/query.lcd';
import * as _201 from './wasm/v1/query.rpc.Query';
import * as _202 from './wasm/v1/tx.rpc.msg';
import * as _246 from './lcd';
import * as _247 from './rpc.query';
import * as _248 from './rpc.tx';
export namespace cosmwasm {
	export namespace wasm {
		export const v1 = {
			..._66,
			..._67,
			..._68,
			..._69,
			..._70,
			..._71,
			..._72,
			..._198,
			..._199,
			..._200,
			..._201,
			..._202
		};
	}
	export const ClientFactory = {
		..._246,
		..._247,
		..._248
	};
}
