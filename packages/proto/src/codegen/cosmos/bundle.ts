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
import * as _26 from './base/tendermint/v1beta1/query';
import * as _27 from './base/v1beta1/coin';
import * as _28 from './crypto/ed25519/keys';
import * as _29 from './crypto/hd/v1/hd';
import * as _30 from './crypto/keyring/v1/record';
import * as _31 from './crypto/multisig/keys';
import * as _32 from './crypto/secp256k1/keys';
import * as _33 from './crypto/secp256r1/keys';
import * as _34 from './crypto/sr25519/keys';
import * as _35 from './distribution/v1beta1/distribution';
import * as _36 from './distribution/v1beta1/genesis';
import * as _37 from './distribution/v1beta1/query';
import * as _38 from './distribution/v1beta1/tx';
import * as _39 from './evidence/v1beta1/evidence';
import * as _40 from './evidence/v1beta1/genesis';
import * as _41 from './evidence/v1beta1/query';
import * as _42 from './evidence/v1beta1/tx';
import * as _43 from './feegrant/v1beta1/feegrant';
import * as _44 from './feegrant/v1beta1/genesis';
import * as _45 from './feegrant/v1beta1/query';
import * as _46 from './feegrant/v1beta1/tx';
import * as _47 from './gov/v1beta1/genesis';
import * as _48 from './gov/v1beta1/gov';
import * as _49 from './gov/v1beta1/query';
import * as _50 from './gov/v1beta1/tx';
import * as _51 from './slashing/v1beta1/genesis';
import * as _52 from './slashing/v1beta1/query';
import * as _53 from './slashing/v1beta1/slashing';
import * as _54 from './slashing/v1beta1/tx';
import * as _55 from './staking/v1beta1/authz';
import * as _56 from './staking/v1beta1/genesis';
import * as _57 from './staking/v1beta1/query';
import * as _58 from './staking/v1beta1/staking';
import * as _59 from './staking/v1beta1/tx';
import * as _60 from './tx/signing/v1beta1/signing';
import * as _61 from './tx/v1beta1/service';
import * as _62 from './tx/v1beta1/tx';
import * as _63 from './upgrade/v1beta1/query';
import * as _64 from './upgrade/v1beta1/tx';
import * as _65 from './upgrade/v1beta1/upgrade';
import * as _142 from './accesscontrol_x/tx.amino';
import * as _143 from './authz/v1beta1/tx.amino';
import * as _144 from './bank/v1beta1/tx.amino';
import * as _145 from './distribution/v1beta1/tx.amino';
import * as _146 from './evidence/v1beta1/tx.amino';
import * as _147 from './feegrant/v1beta1/tx.amino';
import * as _148 from './gov/v1beta1/tx.amino';
import * as _149 from './slashing/v1beta1/tx.amino';
import * as _150 from './staking/v1beta1/tx.amino';
import * as _151 from './upgrade/v1beta1/tx.amino';
import * as _152 from './accesscontrol_x/tx.registry';
import * as _153 from './authz/v1beta1/tx.registry';
import * as _154 from './bank/v1beta1/tx.registry';
import * as _155 from './distribution/v1beta1/tx.registry';
import * as _156 from './evidence/v1beta1/tx.registry';
import * as _157 from './feegrant/v1beta1/tx.registry';
import * as _158 from './gov/v1beta1/tx.registry';
import * as _159 from './slashing/v1beta1/tx.registry';
import * as _160 from './staking/v1beta1/tx.registry';
import * as _161 from './upgrade/v1beta1/tx.registry';
import * as _162 from './accesscontrol_x/query.lcd';
import * as _163 from './auth/v1beta1/query.lcd';
import * as _164 from './authz/v1beta1/query.lcd';
import * as _165 from './bank/v1beta1/query.lcd';
import * as _166 from './base/tendermint/v1beta1/query.lcd';
import * as _167 from './distribution/v1beta1/query.lcd';
import * as _168 from './evidence/v1beta1/query.lcd';
import * as _169 from './feegrant/v1beta1/query.lcd';
import * as _170 from './gov/v1beta1/query.lcd';
import * as _171 from './slashing/v1beta1/query.lcd';
import * as _172 from './staking/v1beta1/query.lcd';
import * as _173 from './tx/v1beta1/service.lcd';
import * as _174 from './upgrade/v1beta1/query.lcd';
import * as _175 from './accesscontrol_x/query.rpc.Query';
import * as _176 from './auth/v1beta1/query.rpc.Query';
import * as _177 from './authz/v1beta1/query.rpc.Query';
import * as _178 from './bank/v1beta1/query.rpc.Query';
import * as _179 from './base/tendermint/v1beta1/query.rpc.Service';
import * as _180 from './distribution/v1beta1/query.rpc.Query';
import * as _181 from './evidence/v1beta1/query.rpc.Query';
import * as _182 from './feegrant/v1beta1/query.rpc.Query';
import * as _183 from './gov/v1beta1/query.rpc.Query';
import * as _184 from './slashing/v1beta1/query.rpc.Query';
import * as _185 from './staking/v1beta1/query.rpc.Query';
import * as _186 from './tx/v1beta1/service.rpc.Service';
import * as _187 from './upgrade/v1beta1/query.rpc.Query';
import * as _188 from './accesscontrol_x/tx.rpc.msg';
import * as _189 from './authz/v1beta1/tx.rpc.msg';
import * as _190 from './bank/v1beta1/tx.rpc.msg';
import * as _191 from './distribution/v1beta1/tx.rpc.msg';
import * as _192 from './evidence/v1beta1/tx.rpc.msg';
import * as _193 from './feegrant/v1beta1/tx.rpc.msg';
import * as _194 from './gov/v1beta1/tx.rpc.msg';
import * as _195 from './slashing/v1beta1/tx.rpc.msg';
import * as _196 from './staking/v1beta1/tx.rpc.msg';
import * as _197 from './upgrade/v1beta1/tx.rpc.msg';
import * as _243 from './lcd';
import * as _244 from './rpc.query';
import * as _245 from './rpc.tx';
export namespace cosmos {
	export namespace accesscontrol_x {
		export const v1beta1 = {
			..._3,
			..._4,
			..._5,
			..._142,
			..._152,
			..._162,
			..._175,
			..._188
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
			..._163,
			..._176
		};
	}
	export namespace authz {
		export const v1beta1 = {
			..._13,
			..._14,
			..._15,
			..._16,
			..._17,
			..._143,
			..._153,
			..._164,
			..._177,
			..._189
		};
	}
	export namespace bank {
		export const v1beta1 = {
			..._18,
			..._19,
			..._20,
			..._21,
			..._22,
			..._144,
			..._154,
			..._165,
			..._178,
			..._190
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
		export namespace tendermint {
			export const v1beta1 = {
				..._26,
				..._166,
				..._179
			};
		}
		export const v1beta1 = {
			..._27
		};
	}
	export namespace crypto {
		export const ed25519 = {
			..._28
		};
		export namespace hd {
			export const v1 = {
				..._29
			};
		}
		export namespace keyring {
			export const v1 = {
				..._30
			};
		}
		export const multisig = {
			..._31
		};
		export const secp256k1 = {
			..._32
		};
		export const secp256r1 = {
			..._33
		};
		export const sr25519 = {
			..._34
		};
	}
	export namespace distribution {
		export const v1beta1 = {
			..._35,
			..._36,
			..._37,
			..._38,
			..._145,
			..._155,
			..._167,
			..._180,
			..._191
		};
	}
	export namespace evidence {
		export const v1beta1 = {
			..._39,
			..._40,
			..._41,
			..._42,
			..._146,
			..._156,
			..._168,
			..._181,
			..._192
		};
	}
	export namespace feegrant {
		export const v1beta1 = {
			..._43,
			..._44,
			..._45,
			..._46,
			..._147,
			..._157,
			..._169,
			..._182,
			..._193
		};
	}
	export namespace gov {
		export const v1beta1 = {
			..._47,
			..._48,
			..._49,
			..._50,
			..._148,
			..._158,
			..._170,
			..._183,
			..._194
		};
	}
	export namespace slashing {
		export const v1beta1 = {
			..._51,
			..._52,
			..._53,
			..._54,
			..._149,
			..._159,
			..._171,
			..._184,
			..._195
		};
	}
	export namespace staking {
		export const v1beta1 = {
			..._55,
			..._56,
			..._57,
			..._58,
			..._59,
			..._150,
			..._160,
			..._172,
			..._185,
			..._196
		};
	}
	export namespace tx {
		export namespace signing {
			export const v1beta1 = {
				..._60
			};
		}
		export const v1beta1 = {
			..._61,
			..._62,
			..._173,
			..._186
		};
	}
	export namespace upgrade {
		export const v1beta1 = {
			..._63,
			..._64,
			..._65,
			..._151,
			..._161,
			..._174,
			..._187,
			..._197
		};
	}
	export const ClientFactory = {
		..._243,
		..._244,
		..._245
	};
}
