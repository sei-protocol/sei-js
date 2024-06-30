import * as _131 from './abci/types';
import * as _132 from './crypto/keys';
import * as _133 from './crypto/proof';
import * as _134 from './libs/bits/types';
import * as _135 from './p2p/types';
import * as _136 from './types/block';
import * as _137 from './types/evidence';
import * as _138 from './types/params';
import * as _139 from './types/types';
import * as _140 from './types/validator';
import * as _141 from './version/types';
export namespace tendermint {
	export const abci = {
		..._131
	};
	export const crypto = {
		..._132,
		..._133
	};
	export namespace libs {
		export const bits = {
			..._134
		};
	}
	export const p2p = {
		..._135
	};
	export const types = {
		..._136,
		..._137,
		..._138,
		..._139,
		..._140
	};
	export const version = {
		..._141
	};
}
