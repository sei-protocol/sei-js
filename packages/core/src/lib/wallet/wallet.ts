import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { HdPath, stringToPath } from '@cosmjs/crypto';

/**
 * Gets the Hierarchical deterministic Cosmos Hub/Atom path for the accountIndex
 * @param accountIndex The account index
 * @returns A HdPath object 
 */
export const getHdPath = (accountIndex = 0): HdPath => {
	const stringPath = `m/44'/118'/0'/0/${accountIndex}`;
	return stringToPath(stringPath);
};

/**
 * Creates a DirectSecp256K1HdWallet object given the account index.
 * @param mnemonicLength The length of the mnemonic phrase to generate with the wallet.
 * @param accountIndex The account index.
 * @returns A DirectSecp256k1HdWallet object representing a newly generated wallet.
 */
export const generateWallet = async (mnemonicLength: 12 | 15 | 18 | 21 | 24 = 12, accountIndex?: number): Promise<DirectSecp256k1HdWallet> => {
	return await DirectSecp256k1HdWallet.generate(mnemonicLength, {
		prefix: 'sei',
		hdPaths: [getHdPath(accountIndex)]
	});
};

/**
 * Uses the given mnemonic phrase and account index to re-generate a wallet.
 * @param seedPhrase The mnemonic phrase created with the wallet
 * @param accountIndex The account index.
 * @returns A DirectSecp256k1HdWallet object representing an existing wallet.
 */
export const restoreWallet = async (seedPhrase: string, accountIndex?: number): Promise<DirectSecp256k1HdWallet> => {
	return await DirectSecp256k1HdWallet.fromMnemonic(seedPhrase, { prefix: 'sei', hdPaths: [getHdPath(accountIndex)] });
};
