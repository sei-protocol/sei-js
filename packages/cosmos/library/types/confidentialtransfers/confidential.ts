import type { Ciphertext } from "./cryptography";

export interface CtAccount {
	/** serialized public key */
	public_key: Uint8Array;
	/** lo bits of the pending balance */
	pending_balance_lo?: Ciphertext;
	/** hi bits of the pending balance */
	pending_balance_hi?: Ciphertext;
	pending_balance_credit_counter: number;
	/** elgamal encoded balance */
	available_balance?: Ciphertext;
	/** aes encoded balance */
	decryptable_available_balance: string;
}

export interface CtAccountWithDenom {
	denom: string;
	account?: CtAccount;
}
