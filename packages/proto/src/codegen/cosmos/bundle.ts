import * as _3 from './auth/v1beta1/auth';
import * as _4 from './auth/v1beta1/genesis';
import * as _5 from './auth/v1beta1/query';
import * as _6 from './bank/v1beta1/authz';
import * as _7 from './bank/v1beta1/bank';
import * as _8 from './bank/v1beta1/genesis';
import * as _9 from './bank/v1beta1/query';
import * as _10 from './bank/v1beta1/tx';
import * as _11 from './base/abci/v1beta1/abci';
import * as _12 from './base/query/v1beta1/pagination';
import * as _13 from './base/reflection/v2alpha1/reflection';
import * as _14 from './base/v1beta1/coin';
import * as _15 from './crypto/ed25519/keys';
import * as _16 from './crypto/hd/v1/hd';
import * as _17 from './crypto/keyring/v1/record';
import * as _18 from './crypto/multisig/keys';
import * as _19 from './crypto/secp256k1/keys';
import * as _20 from './crypto/secp256r1/keys';
import * as _21 from './distribution/v1beta1/distribution';
import * as _22 from './distribution/v1beta1/genesis';
import * as _23 from './distribution/v1beta1/query';
import * as _24 from './distribution/v1beta1/tx';
import * as _25 from './gov/v1beta1/genesis';
import * as _26 from './gov/v1beta1/gov';
import * as _27 from './gov/v1beta1/query';
import * as _28 from './gov/v1beta1/tx';
import * as _29 from './staking/v1beta1/authz';
import * as _30 from './staking/v1beta1/genesis';
import * as _31 from './staking/v1beta1/query';
import * as _32 from './staking/v1beta1/staking';
import * as _33 from './staking/v1beta1/tx';
import * as _34 from './tx/signing/v1beta1/signing';
import * as _35 from './tx/v1beta1/service';
import * as _36 from './tx/v1beta1/tx';
import * as _37 from './upgrade/v1beta1/query';
import * as _38 from './upgrade/v1beta1/tx';
import * as _39 from './upgrade/v1beta1/upgrade';
import * as _123 from './bank/v1beta1/tx.amino';
import * as _124 from './distribution/v1beta1/tx.amino';
import * as _125 from './gov/v1beta1/tx.amino';
import * as _126 from './staking/v1beta1/tx.amino';
import * as _127 from './upgrade/v1beta1/tx.amino';
import * as _128 from './bank/v1beta1/tx.registry';
import * as _129 from './distribution/v1beta1/tx.registry';
import * as _130 from './gov/v1beta1/tx.registry';
import * as _131 from './staking/v1beta1/tx.registry';
import * as _132 from './upgrade/v1beta1/tx.registry';
import * as _133 from './auth/v1beta1/query.lcd';
import * as _134 from './bank/v1beta1/query.lcd';
import * as _135 from './distribution/v1beta1/query.lcd';
import * as _136 from './gov/v1beta1/query.lcd';
import * as _137 from './staking/v1beta1/query.lcd';
import * as _138 from './tx/v1beta1/service.lcd';
import * as _139 from './upgrade/v1beta1/query.lcd';
import * as _140 from './auth/v1beta1/query.rpc.Query';
import * as _141 from './bank/v1beta1/query.rpc.Query';
import * as _142 from './distribution/v1beta1/query.rpc.Query';
import * as _143 from './gov/v1beta1/query.rpc.Query';
import * as _144 from './staking/v1beta1/query.rpc.Query';
import * as _145 from './tx/v1beta1/service.rpc.Service';
import * as _146 from './upgrade/v1beta1/query.rpc.Query';
import * as _147 from './bank/v1beta1/tx.rpc.msg';
import * as _148 from './distribution/v1beta1/tx.rpc.msg';
import * as _149 from './gov/v1beta1/tx.rpc.msg';
import * as _150 from './staking/v1beta1/tx.rpc.msg';
import * as _151 from './upgrade/v1beta1/tx.rpc.msg';
import * as _196 from './lcd';
import * as _197 from './rpc.query';
import * as _198 from './rpc.tx';
export namespace cosmos {
	export namespace auth {
		export const v1beta1 = {
			..._3,
			..._4,
			..._5,
			..._133,
			..._140
		};
	}
	export namespace bank {
		export const v1beta1 = {
			..._6,
			..._7,
			..._8,
			..._9,
			..._10,
			..._123,
			..._128,
			..._134,
			..._141,
			..._147
		};
	}
	export namespace base {
		export namespace abci {
			export const v1beta1 = {
				..._11
			};
		}
		export namespace query {
			export const v1beta1 = {
				..._12
			};
		}
		export namespace reflection {
			export const v2alpha1 = {
				..._13
			};
		}
		export const v1beta1 = {
			..._14
		};
	}
	export namespace crypto {
		export const ed25519 = {
			..._15
		};
		export namespace hd {
			export const v1 = {
				..._16
			};
		}
		export namespace keyring {
			export const v1 = {
				..._17
			};
		}
		export const multisig = {
			..._18
		};
		export const secp256k1 = {
			..._19
		};
		export const secp256r1 = {
			..._20
		};
	}
	export namespace distribution {
		export const v1beta1 = {
			..._21,
			..._22,
			..._23,
			..._24,
			..._124,
			..._129,
			..._135,
			..._142,
			..._148
		};
	}
	export namespace gov {
		export const v1beta1 = {
			..._25,
			..._26,
			..._27,
			..._28,
			..._125,
			..._130,
			..._136,
			..._143,
			..._149
		};
	}
	export namespace staking {
		export const v1beta1 = {
			..._29,
			..._30,
			..._31,
			..._32,
			..._33,
			..._126,
			..._131,
			..._137,
			..._144,
			..._150
		};
	}
	export namespace tx {
		export namespace signing {
			export const v1beta1 = {
				..._34
			};
		}
		export const v1beta1 = {
			..._35,
			..._36,
			..._138,
			..._145
		};
	}
	export namespace upgrade {
		export const v1beta1 = {
			..._37,
			..._38,
			..._39,
			..._127,
			..._132,
			..._139,
			..._146,
			..._151
		};
	}
	export const ClientFactory = {
		..._196,
		..._197,
		..._198
	};
}
