import * as _40 from './wasm/v1/authz';
import * as _41 from './wasm/v1/genesis';
import * as _42 from './wasm/v1/ibc';
import * as _43 from './wasm/v1/proposal';
import * as _44 from './wasm/v1/query';
import * as _45 from './wasm/v1/tx';
import * as _46 from './wasm/v1/types';
import * as _152 from './wasm/v1/tx.amino';
import * as _153 from './wasm/v1/tx.registry';
import * as _154 from './wasm/v1/query.lcd';
import * as _155 from './wasm/v1/query.rpc.Query';
import * as _156 from './wasm/v1/tx.rpc.msg';
import * as _199 from './lcd';
import * as _200 from './rpc.query';
import * as _201 from './rpc.tx';
export namespace cosmwasm {
	export namespace wasm {
		export const v1 = {
			..._40,
			..._41,
			..._42,
			..._43,
			..._44,
			..._45,
			..._46,
			..._152,
			..._153,
			..._154,
			..._155,
			..._156
		};
	}
	export const ClientFactory = {
		..._199,
		..._200,
		..._201
	};
}
