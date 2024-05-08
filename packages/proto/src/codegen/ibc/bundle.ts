import * as _104 from './applications/transfer/v1/genesis';
import * as _105 from './applications/transfer/v1/query';
import * as _106 from './applications/transfer/v1/transfer';
import * as _107 from './applications/transfer/v1/tx';
import * as _108 from './applications/transfer/v2/packet';
import * as _109 from './core/channel/v1/channel';
import * as _110 from './core/channel/v1/genesis';
import * as _111 from './core/channel/v1/query';
import * as _112 from './core/channel/v1/tx';
import * as _113 from './core/client/v1/client';
import * as _114 from './core/client/v1/genesis';
import * as _115 from './core/client/v1/query';
import * as _116 from './core/client/v1/tx';
import * as _117 from './core/commitment/v1/commitment';
import * as _118 from './core/connection/v1/connection';
import * as _119 from './core/connection/v1/genesis';
import * as _120 from './core/connection/v1/query';
import * as _121 from './core/connection/v1/tx';
import * as _122 from './lightclients/localhost/v1/localhost';
import * as _123 from './lightclients/solomachine/v1/solomachine';
import * as _124 from './lightclients/solomachine/v2/solomachine';
import * as _125 from './lightclients/tendermint/v1/tendermint';
import * as _200 from './applications/transfer/v1/tx.amino';
import * as _201 from './core/channel/v1/tx.amino';
import * as _202 from './core/client/v1/tx.amino';
import * as _203 from './core/connection/v1/tx.amino';
import * as _204 from './applications/transfer/v1/tx.registry';
import * as _205 from './core/channel/v1/tx.registry';
import * as _206 from './core/client/v1/tx.registry';
import * as _207 from './core/connection/v1/tx.registry';
import * as _208 from './applications/transfer/v1/query.lcd';
import * as _209 from './core/channel/v1/query.lcd';
import * as _210 from './core/client/v1/query.lcd';
import * as _211 from './core/connection/v1/query.lcd';
import * as _212 from './applications/transfer/v1/query.rpc.Query';
import * as _213 from './core/channel/v1/query.rpc.Query';
import * as _214 from './core/client/v1/query.rpc.Query';
import * as _215 from './core/connection/v1/query.rpc.Query';
import * as _216 from './applications/transfer/v1/tx.rpc.msg';
import * as _217 from './core/channel/v1/tx.rpc.msg';
import * as _218 from './core/client/v1/tx.rpc.msg';
import * as _219 from './core/connection/v1/tx.rpc.msg';
import * as _229 from './lcd';
import * as _230 from './rpc.query';
import * as _231 from './rpc.tx';
export namespace ibc {
	export namespace applications {
		export namespace transfer {
			export const v1 = {
				..._104,
				..._105,
				..._106,
				..._107,
				..._200,
				..._204,
				..._208,
				..._212,
				..._216
			};
			export const v2 = {
				..._108
			};
		}
	}
	export namespace core {
		export namespace channel {
			export const v1 = {
				..._109,
				..._110,
				..._111,
				..._112,
				..._201,
				..._205,
				..._209,
				..._213,
				..._217
			};
		}
		export namespace client {
			export const v1 = {
				..._113,
				..._114,
				..._115,
				..._116,
				..._202,
				..._206,
				..._210,
				..._214,
				..._218
			};
		}
		export namespace commitment {
			export const v1 = {
				..._117
			};
		}
		export namespace connection {
			export const v1 = {
				..._118,
				..._119,
				..._120,
				..._121,
				..._203,
				..._207,
				..._211,
				..._215,
				..._219
			};
		}
	}
	export namespace lightclients {
		export namespace localhost {
			export const v1 = {
				..._122
			};
		}
		export namespace solomachine {
			export const v1 = {
				..._123
			};
			export const v2 = {
				..._124
			};
		}
		export namespace tendermint {
			export const v1 = {
				..._125
			};
		}
	}
	export const ClientFactory = {
		..._229,
		..._230,
		..._231
	};
}
