import * as _52 from './wasm/v1/authz';
import * as _53 from './wasm/v1/genesis';
import * as _54 from './wasm/v1/ibc';
import * as _55 from './wasm/v1/proposal';
import * as _56 from './wasm/v1/query';
import * as _57 from './wasm/v1/tx';
import * as _58 from './wasm/v1/types';
import * as _184 from './wasm/v1/tx.amino';
import * as _185 from './wasm/v1/tx.registry';
import * as _186 from './wasm/v1/query.lcd';
import * as _187 from './wasm/v1/query.rpc.Query';
import * as _188 from './wasm/v1/tx.rpc.msg';
import * as _236 from './lcd';
import * as _237 from './rpc.query';
import * as _238 from './rpc.tx';
export namespace cosmwasm {
	export namespace wasm {
		export const v1 = {
			..._52,
			..._53,
			..._54,
			..._55,
			..._56,
			..._57,
			..._58,
			..._184,
			..._185,
			..._186,
			..._187,
			..._188
		};
	}
	export const ClientFactory = {
		..._236,
		..._237,
		..._238
	};
}
