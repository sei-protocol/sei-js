import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { HdPath, stringToPath } from '@cosmjs/crypto';

/**
 * Gets the Hierarchical deterministic Cosmos Hub/Atom path for the accountIndex
 * @param accountIndex The account index
 * @returns A HdPath object
 * @category Wallets (Advanced)
 */
export const getHdPath = (accountIndex = 0): HdPath => {
	const stringPath = `m/44'/118'/0'/0/${accountIndex}`;
	return stringToPath(stringPath);
};

/**
 * Creates a DirectSecp256K1HdWallet object given the account index.
 *
 * @example
 * ```tsx
 * import { generateWallet, restoreWallet } from "@sei-js/cosmjs";
 *
 * // 12 word mnemonic by default
 * const generatedWallet = await generateWallet(); // has optional parameter for account index
 * console.log('generated mnemonic', generatedWallet.mnemonic);
 * ```
 *
 * @param mnemonicLength The length of the mnemonic phrase to generate with the wallet.
 * @param accountIndex The account index.
 * @returns A DirectSecp256k1HdWallet object representing a newly generated wallet.
 * @category Wallets (Advanced)
 */
export const generateWallet = async (mnemonicLength: 12 | 15 | 18 | 21 | 24 = 12, accountIndex?: number): Promise<DirectSecp256k1HdWallet> => {
	return await DirectSecp256k1HdWallet.generate(mnemonicLength, {
		prefix: 'sei',
		hdPaths: [getHdPath(accountIndex)]
	});
};

/**
 * Uses the given mnemonic phrase and account index to re-generate a wallet.
 *
 * @example
 * ```tsx
 * import { generateWallet, restoreWallet } from "@sei-js/cosmjs";
 *
 * const restoredWallet = await restoreWallet(SEED_PHRASE); // has optional parameter for account index
 * console.log('restored mnemonic', restoredWallet.mnemonic);
 * ```
 *
 * @param seedPhrase The mnemonic phrase created with the wallet
 * @param accountIndex The account index.
 * @returns A DirectSecp256k1HdWallet object representing an existing wallet.
 * @category Wallets (Advanced)
 */
export const restoreWallet = async (seedPhrase: string, accountIndex?: number): Promise<DirectSecp256k1HdWallet> => {
	return await DirectSecp256k1HdWallet.fromMnemonic(seedPhrase, { prefix: 'sei', hdPaths: [getHdPath(accountIndex)] });
};
