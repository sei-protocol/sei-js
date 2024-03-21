import * as _90 from './applications/transfer/v1/genesis';
import * as _91 from './applications/transfer/v1/query';
import * as _92 from './applications/transfer/v1/transfer';
import * as _93 from './applications/transfer/v1/tx';
import * as _94 from './applications/transfer/v2/packet';
import * as _95 from './core/channel/v1/channel';
import * as _96 from './core/channel/v1/genesis';
import * as _97 from './core/channel/v1/query';
import * as _98 from './core/channel/v1/tx';
import * as _99 from './core/client/v1/client';
import * as _100 from './core/client/v1/genesis';
import * as _101 from './core/client/v1/query';
import * as _102 from './core/client/v1/tx';
import * as _103 from './core/commitment/v1/commitment';
import * as _104 from './core/connection/v1/connection';
import * as _105 from './core/connection/v1/genesis';
import * as _106 from './core/connection/v1/query';
import * as _107 from './core/connection/v1/tx';
import * as _108 from './lightclients/localhost/v1/localhost';
import * as _109 from './lightclients/solomachine/v1/solomachine';
import * as _110 from './lightclients/solomachine/v2/solomachine';
import * as _111 from './lightclients/tendermint/v1/tendermint';
import * as _176 from './applications/transfer/v1/tx.amino';
import * as _177 from './core/channel/v1/tx.amino';
import * as _178 from './core/client/v1/tx.amino';
import * as _179 from './core/connection/v1/tx.amino';
import * as _180 from './applications/transfer/v1/tx.registry';
import * as _181 from './core/channel/v1/tx.registry';
import * as _182 from './core/client/v1/tx.registry';
import * as _183 from './core/connection/v1/tx.registry';
import * as _184 from './applications/transfer/v1/query.lcd';
import * as _185 from './core/channel/v1/query.lcd';
import * as _186 from './core/client/v1/query.lcd';
import * as _187 from './core/connection/v1/query.lcd';
import * as _188 from './applications/transfer/v1/query.rpc.Query';
import * as _189 from './core/channel/v1/query.rpc.Query';
import * as _190 from './core/client/v1/query.rpc.Query';
import * as _191 from './core/connection/v1/query.rpc.Query';
import * as _192 from './applications/transfer/v1/tx.rpc.msg';
import * as _193 from './core/channel/v1/tx.rpc.msg';
import * as _194 from './core/client/v1/tx.rpc.msg';
import * as _195 from './core/connection/v1/tx.rpc.msg';
import * as _205 from './lcd';
import * as _206 from './rpc.query';
import * as _207 from './rpc.tx';
export namespace ibc {
	export namespace applications {
		export namespace transfer {
			export const v1 = {
				..._90,
				..._91,
				..._92,
				..._93,
				..._176,
				..._180,
				..._184,
				..._188,
				..._192
			};
			export const v2 = {
				..._94
			};
		}
	}
	export namespace core {
		export namespace channel {
			export const v1 = {
				..._95,
				..._96,
				..._97,
				..._98,
				..._177,
				..._181,
				..._185,
				..._189,
				..._193
			};
		}
		export namespace client {
			export const v1 = {
				..._99,
				..._100,
				..._101,
				..._102,
				..._178,
				..._182,
				..._186,
				..._190,
				..._194
			};
		}
		export namespace commitment {
			export const v1 = {
				..._103
			};
		}
		export namespace connection {
			export const v1 = {
				..._104,
				..._105,
				..._106,
				..._107,
				..._179,
				..._183,
				..._187,
				..._191,
				..._195
			};
		}
	}
	export namespace lightclients {
		export namespace localhost {
			export const v1 = {
				..._108
			};
		}
		export namespace solomachine {
			export const v1 = {
				..._109
			};
			export const v2 = {
				..._110
			};
		}
		export namespace tendermint {
			export const v1 = {
				..._111
			};
		}
	}
	export const ClientFactory = {
		..._205,
		..._206,
		..._207
	};
}
