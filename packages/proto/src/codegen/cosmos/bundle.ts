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
import * as _13 from './authz/v1beta1/authz';
import * as _14 from './authz/v1beta1/event';
import * as _15 from './authz/v1beta1/genesis';
import * as _16 from './authz/v1beta1/query';
import * as _17 from './authz/v1beta1/tx';
import * as _18 from './bank/v1beta1/authz';
import * as _19 from './bank/v1beta1/bank';
import * as _20 from './bank/v1beta1/genesis';
import * as _21 from './bank/v1beta1/query';
import * as _22 from './bank/v1beta1/tx';
import * as _23 from './base/abci/v1beta1/abci';
import * as _24 from './base/query/v1beta1/pagination';
import * as _25 from './base/reflection/v2alpha1/reflection';
import * as _26 from './base/v1beta1/coin';
import * as _27 from './crypto/ed25519/keys';
import * as _28 from './crypto/hd/v1/hd';
import * as _29 from './crypto/keyring/v1/record';
import * as _30 from './crypto/multisig/keys';
import * as _31 from './crypto/secp256k1/keys';
import * as _32 from './crypto/secp256r1/keys';
import * as _33 from './crypto/sr25519/keys';
import * as _34 from './distribution/v1beta1/distribution';
import * as _35 from './distribution/v1beta1/genesis';
import * as _36 from './distribution/v1beta1/query';
import * as _37 from './distribution/v1beta1/tx';
import * as _38 from './evidence/v1beta1/evidence';
import * as _39 from './evidence/v1beta1/genesis';
import * as _40 from './evidence/v1beta1/query';
import * as _41 from './evidence/v1beta1/tx';
import * as _42 from './feegrant/v1beta1/feegrant';
import * as _43 from './feegrant/v1beta1/genesis';
import * as _44 from './feegrant/v1beta1/query';
import * as _45 from './feegrant/v1beta1/tx';
import * as _46 from './gov/v1beta1/genesis';
import * as _47 from './gov/v1beta1/gov';
import * as _48 from './gov/v1beta1/query';
import * as _49 from './gov/v1beta1/tx';
import * as _50 from './slashing/v1beta1/genesis';
import * as _51 from './slashing/v1beta1/query';
import * as _52 from './slashing/v1beta1/slashing';
import * as _53 from './slashing/v1beta1/tx';
import * as _54 from './staking/v1beta1/authz';
import * as _55 from './staking/v1beta1/genesis';
import * as _56 from './staking/v1beta1/query';
import * as _57 from './staking/v1beta1/staking';
import * as _58 from './staking/v1beta1/tx';
import * as _59 from './tx/signing/v1beta1/signing';
import * as _60 from './tx/v1beta1/service';
import * as _61 from './tx/v1beta1/tx';
import * as _62 from './upgrade/v1beta1/query';
import * as _63 from './upgrade/v1beta1/tx';
import * as _64 from './upgrade/v1beta1/upgrade';
import * as _141 from './accesscontrol_x/tx.amino';
import * as _142 from './authz/v1beta1/tx.amino';
import * as _143 from './bank/v1beta1/tx.amino';
import * as _144 from './distribution/v1beta1/tx.amino';
import * as _145 from './evidence/v1beta1/tx.amino';
import * as _146 from './feegrant/v1beta1/tx.amino';
import * as _147 from './gov/v1beta1/tx.amino';
import * as _148 from './slashing/v1beta1/tx.amino';
import * as _149 from './staking/v1beta1/tx.amino';
import * as _150 from './upgrade/v1beta1/tx.amino';
import * as _151 from './accesscontrol_x/tx.registry';
import * as _152 from './authz/v1beta1/tx.registry';
import * as _153 from './bank/v1beta1/tx.registry';
import * as _154 from './distribution/v1beta1/tx.registry';
import * as _155 from './evidence/v1beta1/tx.registry';
import * as _156 from './feegrant/v1beta1/tx.registry';
import * as _157 from './gov/v1beta1/tx.registry';
import * as _158 from './slashing/v1beta1/tx.registry';
import * as _159 from './staking/v1beta1/tx.registry';
import * as _160 from './upgrade/v1beta1/tx.registry';
import * as _161 from './accesscontrol_x/query.lcd';
import * as _162 from './auth/v1beta1/query.lcd';
import * as _163 from './authz/v1beta1/query.lcd';
import * as _164 from './bank/v1beta1/query.lcd';
import * as _165 from './distribution/v1beta1/query.lcd';
import * as _166 from './evidence/v1beta1/query.lcd';
import * as _167 from './feegrant/v1beta1/query.lcd';
import * as _168 from './gov/v1beta1/query.lcd';
import * as _169 from './slashing/v1beta1/query.lcd';
import * as _170 from './staking/v1beta1/query.lcd';
import * as _171 from './tx/v1beta1/service.lcd';
import * as _172 from './upgrade/v1beta1/query.lcd';
import * as _173 from './accesscontrol_x/query.rpc.Query';
import * as _174 from './auth/v1beta1/query.rpc.Query';
import * as _175 from './authz/v1beta1/query.rpc.Query';
import * as _176 from './bank/v1beta1/query.rpc.Query';
import * as _177 from './distribution/v1beta1/query.rpc.Query';
import * as _178 from './evidence/v1beta1/query.rpc.Query';
import * as _179 from './feegrant/v1beta1/query.rpc.Query';
import * as _180 from './gov/v1beta1/query.rpc.Query';
import * as _181 from './slashing/v1beta1/query.rpc.Query';
import * as _182 from './staking/v1beta1/query.rpc.Query';
import * as _183 from './tx/v1beta1/service.rpc.Service';
import * as _184 from './upgrade/v1beta1/query.rpc.Query';
import * as _185 from './accesscontrol_x/tx.rpc.msg';
import * as _186 from './authz/v1beta1/tx.rpc.msg';
import * as _187 from './bank/v1beta1/tx.rpc.msg';
import * as _188 from './distribution/v1beta1/tx.rpc.msg';
import * as _189 from './evidence/v1beta1/tx.rpc.msg';
import * as _190 from './feegrant/v1beta1/tx.rpc.msg';
import * as _191 from './gov/v1beta1/tx.rpc.msg';
import * as _192 from './slashing/v1beta1/tx.rpc.msg';
import * as _193 from './staking/v1beta1/tx.rpc.msg';
import * as _194 from './upgrade/v1beta1/tx.rpc.msg';
import * as _240 from './lcd';
import * as _241 from './rpc.query';
import * as _242 from './rpc.tx';
export namespace cosmos {
	export namespace accesscontrol_x {
		export const v1beta1 = {
			..._3,
			..._4,
			..._5,
			..._141,
			..._151,
			..._161,
			..._173,
			..._185
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
			..._162,
			..._174
		};
	}
	export namespace authz {
		export const v1beta1 = {
			..._13,
			..._14,
			..._15,
			..._16,
			..._17,
			..._142,
			..._152,
			..._163,
			..._175,
			..._186
		};
	}
	export namespace bank {
		export const v1beta1 = {
			..._18,
			..._19,
			..._20,
			..._21,
			..._22,
			..._143,
			..._153,
			..._164,
			..._176,
			..._187
		};
	}
	export namespace base {
		export namespace abci {
			export const v1beta1 = {
				..._23
			};
		}
		export namespace query {
			export const v1beta1 = {
				..._24
			};
		}
		export namespace reflection {
			export const v2alpha1 = {
				..._25
			};
		}
		export const v1beta1 = {
			..._26
		};
	}
	export namespace crypto {
		export const ed25519 = {
			..._27
		};
		export namespace hd {
			export const v1 = {
				..._28
			};
		}
		export namespace keyring {
			export const v1 = {
				..._29
			};
		}
		export const multisig = {
			..._30
		};
		export const secp256k1 = {
			..._31
		};
		export const secp256r1 = {
			..._32
		};
		export const sr25519 = {
			..._33
		};
	}
	export namespace distribution {
		export const v1beta1 = {
			..._34,
			..._35,
			..._36,
			..._37,
			..._144,
			..._154,
			..._165,
			..._177,
			..._188
		};
	}
	export namespace evidence {
		export const v1beta1 = {
			..._38,
			..._39,
			..._40,
			..._41,
			..._145,
			..._155,
			..._166,
			..._178,
			..._189
		};
	}
	export namespace feegrant {
		export const v1beta1 = {
			..._42,
			..._43,
			..._44,
			..._45,
			..._146,
			..._156,
			..._167,
			..._179,
			..._190
		};
	}
	export namespace gov {
		export const v1beta1 = {
			..._46,
			..._47,
			..._48,
			..._49,
			..._147,
			..._157,
			..._168,
			..._180,
			..._191
		};
	}
	export namespace slashing {
		export const v1beta1 = {
			..._50,
			..._51,
			..._52,
			..._53,
			..._148,
			..._158,
			..._169,
			..._181,
			..._192
		};
	}
	export namespace staking {
		export const v1beta1 = {
			..._54,
			..._55,
			..._56,
			..._57,
			..._58,
			..._149,
			..._159,
			..._170,
			..._182,
			..._193
		};
	}
	export namespace tx {
		export namespace signing {
			export const v1beta1 = {
				..._59
			};
		}
		export const v1beta1 = {
			..._60,
			..._61,
			..._171,
			..._183
		};
	}
	export namespace upgrade {
		export const v1beta1 = {
			..._62,
			..._63,
			..._64,
			..._150,
			..._160,
			..._172,
			..._184,
			..._194
		};
	}
	export const ClientFactory = {
		..._240,
		..._241,
		..._242
	};
}
