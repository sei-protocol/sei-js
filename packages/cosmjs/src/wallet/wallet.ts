import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { HdPath, stringToPath } from '@cosmjs/crypto';

/**
 * Gets the Hierarchical deterministic Cosmos Hub/Atom path for the accountIndex
 * @param accountIndex The account index
 * @param coinType The coin type to use when deriving the path (118 for Cosmos, 60 for EVM)
 * @returns A HdPath object
 * @category Wallets (Advanced)
 */
export const getHdPath = (accountIndex = 0, coinType = 118): HdPath => {
	const stringPath = `m/44'/${coinType}'/0'/0/${accountIndex}`;
	return stringToPath(stringPath);
};

/**
 * Creates a DirectSecp256K1HdWallet object given an HD path (see #getHDPath).
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
 * @param hdPath hdPath for the wallet you want to generate.
 * @returns A DirectSecp256k1HdWallet object representing a newly generated wallet.
 * @category Wallets (Advanced)
 */
export const generateWallet = async (mnemonicLength: 12 | 15 | 18 | 21 | 24 = 12, hdPath?: HdPath): Promise<DirectSecp256k1HdWallet> => {
	return await DirectSecp256k1HdWallet.generate(mnemonicLength, {
		prefix: 'sei',
		hdPaths: [hdPath || getHdPath(0)]
	});
};

/**
 * Uses the given mnemonic phrase and hd path to re-generate a wallet.
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
 * @param hdPath hdPath for the wallet you want to restore.
 * @returns A DirectSecp256k1HdWallet object representing an existing wallet.
 * @category Wallets (Advanced)
 */
export const restoreWallet = async (seedPhrase: string, hdPath?: HdPath): Promise<DirectSecp256k1HdWallet> => {
	return await DirectSecp256k1HdWallet.fromMnemonic(seedPhrase, { prefix: 'sei', hdPaths: [hdPath || getHdPath(0)] });
};
