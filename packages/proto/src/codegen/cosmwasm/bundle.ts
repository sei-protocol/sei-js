import * as _44 from './wasm/v1/authz';
import * as _45 from './wasm/v1/genesis';
import * as _46 from './wasm/v1/ibc';
import * as _47 from './wasm/v1/proposal';
import * as _48 from './wasm/v1/query';
import * as _49 from './wasm/v1/tx';
import * as _50 from './wasm/v1/types';
import * as _171 from './wasm/v1/tx.amino';
import * as _172 from './wasm/v1/tx.registry';
import * as _173 from './wasm/v1/query.lcd';
import * as _174 from './wasm/v1/query.rpc.Query';
import * as _175 from './wasm/v1/tx.rpc.msg';
import * as _223 from './lcd';
import * as _224 from './rpc.query';
import * as _225 from './rpc.tx';
export namespace cosmwasm {
	export namespace wasm {
		export const v1 = {
			..._44,
			..._45,
			..._46,
			..._47,
			..._48,
			..._49,
			..._50,
			..._171,
			..._172,
			..._173,
			..._174,
			..._175
		};
	}
	export const ClientFactory = {
		..._223,
		..._224,
		..._225
	};
}
