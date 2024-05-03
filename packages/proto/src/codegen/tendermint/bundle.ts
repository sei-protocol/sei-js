import * as _122 from './abci/types';
import * as _123 from './crypto/keys';
import * as _124 from './crypto/proof';
import * as _125 from './libs/bits/types';
import * as _126 from './p2p/types';
import * as _127 from './types/block';
import * as _128 from './types/evidence';
import * as _129 from './types/params';
import * as _130 from './types/types';
import * as _131 from './types/validator';
import * as _132 from './version/types';
export namespace tendermint {
	export const abci = {
		..._122
	};
	export const crypto = {
		..._123,
		..._124
	};
	export namespace libs {
		export const bits = {
			..._125
		};
	}
	export const p2p = {
		..._126
	};
	export const types = {
		..._127,
		..._128,
		..._129,
		..._130,
		..._131
	};
	export const version = {
		..._132
	};
}
