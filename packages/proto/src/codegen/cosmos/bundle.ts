import * as _3 from './accesscontrol_x/genesis';
import * as _4 from './accesscontrol_x/query';
import * as _5 from './accesscontrol_x/tx';
import * as _6 from './accesscontrol_x/gov';
import * as _7 from './accesscontrol/accesscontrol';
import * as _8 from './accesscontrol/constants';
import * as _9 from './accesscontrol/legacy';
import * as _10 from './auth/v1beta1/auth';
import * as _11 from './auth/v1beta1/genesis';
import * as _12 from './auth/v1beta1/query';
import * as _13 from './bank/v1beta1/authz';
import * as _14 from './bank/v1beta1/bank';
import * as _15 from './bank/v1beta1/genesis';
import * as _16 from './bank/v1beta1/query';
import * as _17 from './bank/v1beta1/tx';
import * as _18 from './base/abci/v1beta1/abci';
import * as _19 from './base/query/v1beta1/pagination';
import * as _20 from './base/reflection/v2alpha1/reflection';
import * as _21 from './base/v1beta1/coin';
import * as _22 from './crypto/ed25519/keys';
import * as _23 from './crypto/hd/v1/hd';
import * as _24 from './crypto/keyring/v1/record';
import * as _25 from './crypto/multisig/keys';
import * as _26 from './crypto/secp256k1/keys';
import * as _27 from './crypto/secp256r1/keys';
import * as _28 from './crypto/sr25519/keys';
import * as _29 from './distribution/v1beta1/distribution';
import * as _30 from './distribution/v1beta1/genesis';
import * as _31 from './distribution/v1beta1/query';
import * as _32 from './distribution/v1beta1/tx';
import * as _33 from './feegrant/v1beta1/feegrant';
import * as _34 from './feegrant/v1beta1/genesis';
import * as _35 from './feegrant/v1beta1/query';
import * as _36 from './feegrant/v1beta1/tx';
import * as _37 from './gov/v1beta1/genesis';
import * as _38 from './gov/v1beta1/gov';
import * as _39 from './gov/v1beta1/query';
import * as _40 from './gov/v1beta1/tx';
import * as _41 from './staking/v1beta1/authz';
import * as _42 from './staking/v1beta1/genesis';
import * as _43 from './staking/v1beta1/query';
import * as _44 from './staking/v1beta1/staking';
import * as _45 from './staking/v1beta1/tx';
import * as _46 from './tx/signing/v1beta1/signing';
import * as _47 from './tx/v1beta1/service';
import * as _48 from './tx/v1beta1/tx';
import * as _49 from './upgrade/v1beta1/query';
import * as _50 from './upgrade/v1beta1/tx';
import * as _51 from './upgrade/v1beta1/upgrade';
import * as _145 from './accesscontrol_x/tx.amino';
import * as _146 from './bank/v1beta1/tx.amino';
import * as _147 from './distribution/v1beta1/tx.amino';
import * as _148 from './feegrant/v1beta1/tx.amino';
import * as _149 from './gov/v1beta1/tx.amino';
import * as _150 from './staking/v1beta1/tx.amino';
import * as _151 from './upgrade/v1beta1/tx.amino';
import * as _152 from './accesscontrol_x/tx.registry';
import * as _153 from './bank/v1beta1/tx.registry';
import * as _154 from './distribution/v1beta1/tx.registry';
import * as _155 from './feegrant/v1beta1/tx.registry';
import * as _156 from './gov/v1beta1/tx.registry';
import * as _157 from './staking/v1beta1/tx.registry';
import * as _158 from './upgrade/v1beta1/tx.registry';
import * as _159 from './accesscontrol_x/query.lcd';
import * as _160 from './auth/v1beta1/query.lcd';
import * as _161 from './bank/v1beta1/query.lcd';
import * as _162 from './distribution/v1beta1/query.lcd';
import * as _163 from './feegrant/v1beta1/query.lcd';
import * as _164 from './gov/v1beta1/query.lcd';
import * as _165 from './staking/v1beta1/query.lcd';
import * as _166 from './tx/v1beta1/service.lcd';
import * as _167 from './upgrade/v1beta1/query.lcd';
import * as _168 from './accesscontrol_x/query.rpc.Query';
import * as _169 from './auth/v1beta1/query.rpc.Query';
import * as _170 from './bank/v1beta1/query.rpc.Query';
import * as _171 from './distribution/v1beta1/query.rpc.Query';
import * as _172 from './feegrant/v1beta1/query.rpc.Query';
import * as _173 from './gov/v1beta1/query.rpc.Query';
import * as _174 from './staking/v1beta1/query.rpc.Query';
import * as _175 from './tx/v1beta1/service.rpc.Service';
import * as _176 from './upgrade/v1beta1/query.rpc.Query';
import * as _177 from './accesscontrol_x/tx.rpc.msg';
import * as _178 from './bank/v1beta1/tx.rpc.msg';
import * as _179 from './distribution/v1beta1/tx.rpc.msg';
import * as _180 from './feegrant/v1beta1/tx.rpc.msg';
import * as _181 from './gov/v1beta1/tx.rpc.msg';
import * as _182 from './staking/v1beta1/tx.rpc.msg';
import * as _183 from './upgrade/v1beta1/tx.rpc.msg';
import * as _233 from './lcd';
import * as _234 from './rpc.query';
import * as _235 from './rpc.tx';
export namespace cosmos {
	export namespace accesscontrol_x {
		export const v1beta1 = {
			..._3,
			..._4,
			..._5,
			..._145,
			..._152,
			..._159,
			..._168,
			..._177
		};
	}
	export namespace accesscontrol {
		export const v1beta1 = {
			..._6,
			..._7,
			..._8,
			..._9
		};
	}
	export namespace auth {
		export const v1beta1 = {
			..._10,
			..._11,
			..._12,
			..._160,
			..._169
		};
	}
	export namespace bank {
		export const v1beta1 = {
			..._13,
			..._14,
			..._15,
			..._16,
			..._17,
			..._146,
			..._153,
			..._161,
			..._170,
			..._178
		};
	}
	export namespace base {
		export namespace abci {
			export const v1beta1 = {
				..._18
			};
		}
		export namespace query {
			export const v1beta1 = {
				..._19
			};
		}
		export namespace reflection {
			export const v2alpha1 = {
				..._20
			};
		}
		export const v1beta1 = {
			..._21
		};
	}
	export namespace crypto {
		export const ed25519 = {
			..._22
		};
		export namespace hd {
			export const v1 = {
				..._23
			};
		}
		export namespace keyring {
			export const v1 = {
				..._24
			};
		}
		export const multisig = {
			..._25
		};
		export const secp256k1 = {
			..._26
		};
		export const secp256r1 = {
			..._27
		};
		export const sr25519 = {
			..._28
		};
	}
	export namespace distribution {
		export const v1beta1 = {
			..._29,
			..._30,
			..._31,
			..._32,
			..._147,
			..._154,
			..._162,
			..._171,
			..._179
		};
	}
	export namespace feegrant {
		export const v1beta1 = {
			..._33,
			..._34,
			..._35,
			..._36,
			..._148,
			..._155,
			..._163,
			..._172,
			..._180
		};
	}
	export namespace gov {
		export const v1beta1 = {
			..._37,
			..._38,
			..._39,
			..._40,
			..._149,
			..._156,
			..._164,
			..._173,
			..._181
		};
	}
	export namespace staking {
		export const v1beta1 = {
			..._41,
			..._42,
			..._43,
			..._44,
			..._45,
			..._150,
			..._157,
			..._165,
			..._174,
			..._182
		};
	}
	export namespace tx {
		export namespace signing {
			export const v1beta1 = {
				..._46
			};
		}
		export const v1beta1 = {
			..._47,
			..._48,
			..._166,
			..._175
		};
	}
	export namespace upgrade {
		export const v1beta1 = {
			..._49,
			..._50,
			..._51,
			..._151,
			..._158,
			..._167,
			..._176,
			..._183
		};
	}
	export const ClientFactory = {
		..._233,
		..._234,
		..._235
	};
}
