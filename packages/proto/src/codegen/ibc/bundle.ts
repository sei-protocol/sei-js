import * as _107 from './applications/transfer/v1/genesis';
import * as _108 from './applications/transfer/v1/query';
import * as _109 from './applications/transfer/v1/transfer';
import * as _110 from './applications/transfer/v1/tx';
import * as _111 from './applications/transfer/v2/packet';
import * as _112 from './core/channel/v1/channel';
import * as _113 from './core/channel/v1/genesis';
import * as _114 from './core/channel/v1/query';
import * as _115 from './core/channel/v1/tx';
import * as _116 from './core/client/v1/client';
import * as _117 from './core/client/v1/genesis';
import * as _118 from './core/client/v1/query';
import * as _119 from './core/client/v1/tx';
import * as _120 from './core/commitment/v1/commitment';
import * as _121 from './core/connection/v1/connection';
import * as _122 from './core/connection/v1/genesis';
import * as _123 from './core/connection/v1/query';
import * as _124 from './core/connection/v1/tx';
import * as _125 from './core/port/v1/query';
import * as _126 from './core/types/v1/genesis';
import * as _127 from './lightclients/localhost/v1/localhost';
import * as _128 from './lightclients/solomachine/v1/solomachine';
import * as _129 from './lightclients/solomachine/v2/solomachine';
import * as _130 from './lightclients/tendermint/v1/tendermint';
import * as _222 from './applications/transfer/v1/tx.amino';
import * as _223 from './core/channel/v1/tx.amino';
import * as _224 from './core/client/v1/tx.amino';
import * as _225 from './core/connection/v1/tx.amino';
import * as _226 from './applications/transfer/v1/tx.registry';
import * as _227 from './core/channel/v1/tx.registry';
import * as _228 from './core/client/v1/tx.registry';
import * as _229 from './core/connection/v1/tx.registry';
import * as _230 from './applications/transfer/v1/query.lcd';
import * as _231 from './core/channel/v1/query.lcd';
import * as _232 from './core/client/v1/query.lcd';
import * as _233 from './core/connection/v1/query.lcd';
import * as _234 from './applications/transfer/v1/query.rpc.Query';
import * as _235 from './core/channel/v1/query.rpc.Query';
import * as _236 from './core/client/v1/query.rpc.Query';
import * as _237 from './core/connection/v1/query.rpc.Query';
import * as _238 from './core/port/v1/query.rpc.Query';
import * as _239 from './applications/transfer/v1/tx.rpc.msg';
import * as _240 from './core/channel/v1/tx.rpc.msg';
import * as _241 from './core/client/v1/tx.rpc.msg';
import * as _242 from './core/connection/v1/tx.rpc.msg';
import * as _252 from './lcd';
import * as _253 from './rpc.query';
import * as _254 from './rpc.tx';
export namespace ibc {
	export namespace applications {
		export namespace transfer {
			export const v1 = {
				..._107,
				..._108,
				..._109,
				..._110,
				..._222,
				..._226,
				..._230,
				..._234,
				..._239
			};
			export const v2 = {
				..._111
			};
		}
	}
	export namespace core {
		export namespace channel {
			export const v1 = {
				..._112,
				..._113,
				..._114,
				..._115,
				..._223,
				..._227,
				..._231,
				..._235,
				..._240
			};
		}
		export namespace client {
			export const v1 = {
				..._116,
				..._117,
				..._118,
				..._119,
				..._224,
				..._228,
				..._232,
				..._236,
				..._241
			};
		}
		export namespace commitment {
			export const v1 = {
				..._120
			};
		}
		export namespace connection {
			export const v1 = {
				..._121,
				..._122,
				..._123,
				..._124,
				..._225,
				..._229,
				..._233,
				..._237,
				..._242
			};
		}
		export namespace port {
			export const v1 = {
				..._125,
				..._238
			};
		}
		export namespace types {
			export const v1 = {
				..._126
			};
		}
	}
	export namespace lightclients {
		export namespace localhost {
			export const v1 = {
				..._127
			};
		}
		export namespace solomachine {
			export const v1 = {
				..._128
			};
			export const v2 = {
				..._129
			};
		}
		export namespace tendermint {
			export const v1 = {
				..._130
			};
		}
	}
	export const ClientFactory = {
		..._252,
		..._253,
		..._254
	};
}
