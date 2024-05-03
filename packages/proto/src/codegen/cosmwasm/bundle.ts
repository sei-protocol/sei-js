import * as _40 from './wasm/v1/authz';
import * as _41 from './wasm/v1/genesis';
import * as _42 from './wasm/v1/ibc';
import * as _43 from './wasm/v1/proposal';
import * as _44 from './wasm/v1/query';
import * as _45 from './wasm/v1/tx';
import * as _46 from './wasm/v1/types';
import * as _162 from './wasm/v1/tx.amino';
import * as _163 from './wasm/v1/tx.registry';
import * as _164 from './wasm/v1/query.lcd';
import * as _165 from './wasm/v1/query.rpc.Query';
import * as _166 from './wasm/v1/tx.rpc.msg';
import * as _214 from './lcd';
import * as _215 from './rpc.query';
import * as _216 from './rpc.tx';
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
			..._162,
			..._163,
			..._164,
			..._165,
			..._166
		};
	}
	export const ClientFactory = {
		..._214,
		..._215,
		..._216
	};
}
