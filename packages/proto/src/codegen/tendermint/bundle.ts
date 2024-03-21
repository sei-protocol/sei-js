import * as _112 from './abci/types';
import * as _113 from './crypto/keys';
import * as _114 from './crypto/proof';
import * as _115 from './libs/bits/types';
import * as _116 from './p2p/types';
import * as _117 from './types/block';
import * as _118 from './types/evidence';
import * as _119 from './types/params';
import * as _120 from './types/types';
import * as _121 from './types/validator';
import * as _122 from './version/types';
export namespace tendermint {
	export const abci = {
		..._112
	};
	export const crypto = {
		..._113,
		..._114
	};
	export namespace libs {
		export const bits = {
			..._115
		};
	}
	export const p2p = {
		..._116
	};
	export const types = {
		..._117,
		..._118,
		..._119,
		..._120,
		..._121
	};
	export const version = {
		..._122
	};
}
