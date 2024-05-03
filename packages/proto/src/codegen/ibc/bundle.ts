import * as _100 from './applications/transfer/v1/genesis';
import * as _101 from './applications/transfer/v1/query';
import * as _102 from './applications/transfer/v1/transfer';
import * as _103 from './applications/transfer/v1/tx';
import * as _104 from './applications/transfer/v2/packet';
import * as _105 from './core/channel/v1/channel';
import * as _106 from './core/channel/v1/genesis';
import * as _107 from './core/channel/v1/query';
import * as _108 from './core/channel/v1/tx';
import * as _109 from './core/client/v1/client';
import * as _110 from './core/client/v1/genesis';
import * as _111 from './core/client/v1/query';
import * as _112 from './core/client/v1/tx';
import * as _113 from './core/commitment/v1/commitment';
import * as _114 from './core/connection/v1/connection';
import * as _115 from './core/connection/v1/genesis';
import * as _116 from './core/connection/v1/query';
import * as _117 from './core/connection/v1/tx';
import * as _118 from './lightclients/localhost/v1/localhost';
import * as _119 from './lightclients/solomachine/v1/solomachine';
import * as _120 from './lightclients/solomachine/v2/solomachine';
import * as _121 from './lightclients/tendermint/v1/tendermint';
import * as _191 from './applications/transfer/v1/tx.amino';
import * as _192 from './core/channel/v1/tx.amino';
import * as _193 from './core/client/v1/tx.amino';
import * as _194 from './core/connection/v1/tx.amino';
import * as _195 from './applications/transfer/v1/tx.registry';
import * as _196 from './core/channel/v1/tx.registry';
import * as _197 from './core/client/v1/tx.registry';
import * as _198 from './core/connection/v1/tx.registry';
import * as _199 from './applications/transfer/v1/query.lcd';
import * as _200 from './core/channel/v1/query.lcd';
import * as _201 from './core/client/v1/query.lcd';
import * as _202 from './core/connection/v1/query.lcd';
import * as _203 from './applications/transfer/v1/query.rpc.Query';
import * as _204 from './core/channel/v1/query.rpc.Query';
import * as _205 from './core/client/v1/query.rpc.Query';
import * as _206 from './core/connection/v1/query.rpc.Query';
import * as _207 from './applications/transfer/v1/tx.rpc.msg';
import * as _208 from './core/channel/v1/tx.rpc.msg';
import * as _209 from './core/client/v1/tx.rpc.msg';
import * as _210 from './core/connection/v1/tx.rpc.msg';
import * as _220 from './lcd';
import * as _221 from './rpc.query';
import * as _222 from './rpc.tx';
export namespace ibc {
	export namespace applications {
		export namespace transfer {
			export const v1 = {
				..._100,
				..._101,
				..._102,
				..._103,
				..._191,
				..._195,
				..._199,
				..._203,
				..._207
			};
			export const v2 = {
				..._104
			};
		}
	}
	export namespace core {
		export namespace channel {
			export const v1 = {
				..._105,
				..._106,
				..._107,
				..._108,
				..._192,
				..._196,
				..._200,
				..._204,
				..._208
			};
		}
		export namespace client {
			export const v1 = {
				..._109,
				..._110,
				..._111,
				..._112,
				..._193,
				..._197,
				..._201,
				..._205,
				..._209
			};
		}
		export namespace commitment {
			export const v1 = {
				..._113
			};
		}
		export namespace connection {
			export const v1 = {
				..._114,
				..._115,
				..._116,
				..._117,
				..._194,
				..._198,
				..._202,
				..._206,
				..._210
			};
		}
	}
	export namespace lightclients {
		export namespace localhost {
			export const v1 = {
				..._118
			};
		}
		export namespace solomachine {
			export const v1 = {
				..._119
			};
			export const v2 = {
				..._120
			};
		}
		export namespace tendermint {
			export const v1 = {
				..._121
			};
		}
	}
	export const ClientFactory = {
		..._220,
		..._221,
		..._222
	};
}
