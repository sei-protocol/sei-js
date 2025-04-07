export interface Ciphertext {
	/** Pedersen commitment bytes. */
	c: Uint8Array;
	/** Decryption handle bytes. */
	d: Uint8Array;
}
