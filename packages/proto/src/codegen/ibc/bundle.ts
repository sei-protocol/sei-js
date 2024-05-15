import * as _112 from './applications/transfer/v1/genesis';
import * as _113 from './applications/transfer/v1/query';
import * as _114 from './applications/transfer/v1/transfer';
import * as _115 from './applications/transfer/v1/tx';
import * as _116 from './applications/transfer/v2/packet';
import * as _117 from './core/channel/v1/channel';
import * as _118 from './core/channel/v1/genesis';
import * as _119 from './core/channel/v1/query';
import * as _120 from './core/channel/v1/tx';
import * as _121 from './core/client/v1/client';
import * as _122 from './core/client/v1/genesis';
import * as _123 from './core/client/v1/query';
import * as _124 from './core/client/v1/tx';
import * as _125 from './core/commitment/v1/commitment';
import * as _126 from './core/connection/v1/connection';
import * as _127 from './core/connection/v1/genesis';
import * as _128 from './core/connection/v1/query';
import * as _129 from './core/connection/v1/tx';
import * as _130 from './lightclients/localhost/v1/localhost';
import * as _131 from './lightclients/solomachine/v1/solomachine';
import * as _132 from './lightclients/solomachine/v2/solomachine';
import * as _133 from './lightclients/tendermint/v1/tendermint';
import * as _213 from './applications/transfer/v1/tx.amino';
import * as _214 from './core/channel/v1/tx.amino';
import * as _215 from './core/client/v1/tx.amino';
import * as _216 from './core/connection/v1/tx.amino';
import * as _217 from './applications/transfer/v1/tx.registry';
import * as _218 from './core/channel/v1/tx.registry';
import * as _219 from './core/client/v1/tx.registry';
import * as _220 from './core/connection/v1/tx.registry';
import * as _221 from './applications/transfer/v1/query.lcd';
import * as _222 from './core/channel/v1/query.lcd';
import * as _223 from './core/client/v1/query.lcd';
import * as _224 from './core/connection/v1/query.lcd';
import * as _225 from './applications/transfer/v1/query.rpc.Query';
import * as _226 from './core/channel/v1/query.rpc.Query';
import * as _227 from './core/client/v1/query.rpc.Query';
import * as _228 from './core/connection/v1/query.rpc.Query';
import * as _229 from './applications/transfer/v1/tx.rpc.msg';
import * as _230 from './core/channel/v1/tx.rpc.msg';
import * as _231 from './core/client/v1/tx.rpc.msg';
import * as _232 from './core/connection/v1/tx.rpc.msg';
import * as _242 from './lcd';
import * as _243 from './rpc.query';
import * as _244 from './rpc.tx';
export namespace ibc {
	export namespace applications {
		export namespace transfer {
			export const v1 = {
				..._112,
				..._113,
				..._114,
				..._115,
				..._213,
				..._217,
				..._221,
				..._225,
				..._229
			};
			export const v2 = {
				..._116
			};
		}
	}
	export namespace core {
		export namespace channel {
			export const v1 = {
				..._117,
				..._118,
				..._119,
				..._120,
				..._214,
				..._218,
				..._222,
				..._226,
				..._230
			};
		}
		export namespace client {
			export const v1 = {
				..._121,
				..._122,
				..._123,
				..._124,
				..._215,
				..._219,
				..._223,
				..._227,
				..._231
			};
		}
		export namespace commitment {
			export const v1 = {
				..._125
			};
		}
		export namespace connection {
			export const v1 = {
				..._126,
				..._127,
				..._128,
				..._129,
				..._216,
				..._220,
				..._224,
				..._228,
				..._232
			};
		}
	}
	export namespace lightclients {
		export namespace localhost {
			export const v1 = {
				..._130
			};
		}
		export namespace solomachine {
			export const v1 = {
				..._131
			};
			export const v2 = {
				..._132
			};
		}
		export namespace tendermint {
			export const v1 = {
				..._133
			};
		}
	}
	export const ClientFactory = {
		..._242,
		..._243,
		..._244
	};
}
