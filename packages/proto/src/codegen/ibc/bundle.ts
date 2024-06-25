import * as _106 from './applications/transfer/v1/genesis';
import * as _107 from './applications/transfer/v1/query';
import * as _108 from './applications/transfer/v1/transfer';
import * as _109 from './applications/transfer/v1/tx';
import * as _110 from './applications/transfer/v2/packet';
import * as _111 from './core/channel/v1/channel';
import * as _112 from './core/channel/v1/genesis';
import * as _113 from './core/channel/v1/query';
import * as _114 from './core/channel/v1/tx';
import * as _115 from './core/client/v1/client';
import * as _116 from './core/client/v1/genesis';
import * as _117 from './core/client/v1/query';
import * as _118 from './core/client/v1/tx';
import * as _119 from './core/commitment/v1/commitment';
import * as _120 from './core/connection/v1/connection';
import * as _121 from './core/connection/v1/genesis';
import * as _122 from './core/connection/v1/query';
import * as _123 from './core/connection/v1/tx';
import * as _124 from './core/port/v1/query';
import * as _125 from './core/types/v1/genesis';
import * as _126 from './lightclients/localhost/v1/localhost';
import * as _127 from './lightclients/solomachine/v1/solomachine';
import * as _128 from './lightclients/solomachine/v2/solomachine';
import * as _129 from './lightclients/tendermint/v1/tendermint';
import * as _219 from './applications/transfer/v1/tx.amino';
import * as _220 from './core/channel/v1/tx.amino';
import * as _221 from './core/client/v1/tx.amino';
import * as _222 from './core/connection/v1/tx.amino';
import * as _223 from './applications/transfer/v1/tx.registry';
import * as _224 from './core/channel/v1/tx.registry';
import * as _225 from './core/client/v1/tx.registry';
import * as _226 from './core/connection/v1/tx.registry';
import * as _227 from './applications/transfer/v1/query.lcd';
import * as _228 from './core/channel/v1/query.lcd';
import * as _229 from './core/client/v1/query.lcd';
import * as _230 from './core/connection/v1/query.lcd';
import * as _231 from './applications/transfer/v1/query.rpc.Query';
import * as _232 from './core/channel/v1/query.rpc.Query';
import * as _233 from './core/client/v1/query.rpc.Query';
import * as _234 from './core/connection/v1/query.rpc.Query';
import * as _235 from './core/port/v1/query.rpc.Query';
import * as _236 from './applications/transfer/v1/tx.rpc.msg';
import * as _237 from './core/channel/v1/tx.rpc.msg';
import * as _238 from './core/client/v1/tx.rpc.msg';
import * as _239 from './core/connection/v1/tx.rpc.msg';
import * as _249 from './lcd';
import * as _250 from './rpc.query';
import * as _251 from './rpc.tx';
export namespace ibc {
	export namespace applications {
		export namespace transfer {
			export const v1 = {
				..._106,
				..._107,
				..._108,
				..._109,
				..._219,
				..._223,
				..._227,
				..._231,
				..._236
			};
			export const v2 = {
				..._110
			};
		}
	}
	export namespace core {
		export namespace channel {
			export const v1 = {
				..._111,
				..._112,
				..._113,
				..._114,
				..._220,
				..._224,
				..._228,
				..._232,
				..._237
			};
		}
		export namespace client {
			export const v1 = {
				..._115,
				..._116,
				..._117,
				..._118,
				..._221,
				..._225,
				..._229,
				..._233,
				..._238
			};
		}
		export namespace commitment {
			export const v1 = {
				..._119
			};
		}
		export namespace connection {
			export const v1 = {
				..._120,
				..._121,
				..._122,
				..._123,
				..._222,
				..._226,
				..._230,
				..._234,
				..._239
			};
		}
		export namespace port {
			export const v1 = {
				..._124,
				..._235
			};
		}
		export namespace types {
			export const v1 = {
				..._125
			};
		}
	}
	export namespace lightclients {
		export namespace localhost {
			export const v1 = {
				..._126
			};
		}
		export namespace solomachine {
			export const v1 = {
				..._127
			};
			export const v2 = {
				..._128
			};
		}
		export namespace tendermint {
			export const v1 = {
				..._129
			};
		}
	}
	export const ClientFactory = {
		..._249,
		..._250,
		..._251
	};
}
