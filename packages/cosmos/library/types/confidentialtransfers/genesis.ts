import type { CtAccount } from "./confidential";

import type { Params } from "./params";

export interface GenesisState {
	/** params defines the parameters of the module. */
	params?: Params;
	/** accounts is an array of confidential transfer accounts */
	accounts: GenesisCtAccount[];
}

export interface GenesisCtAccount {
	/** account key */
	key: Uint8Array;
	/** confidential transfer account */
	account?: CtAccount;
}
