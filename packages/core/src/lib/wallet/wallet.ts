import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { HdPath, stringToPath } from '@cosmjs/crypto';

export const getHdPath = (accountIndex = 0): HdPath => {
	const stringPath = `m/44'/118'/0'/0/${accountIndex}`;
	return stringToPath(stringPath);
};

export const generateWallet = async (mnemonicLength: 12 | 15 | 18 | 21 | 24 = 12, accountIndex?: number): Promise<DirectSecp256k1HdWallet> => {
	return await DirectSecp256k1HdWallet.generate(mnemonicLength, {
		prefix: 'sei',
		hdPaths: [getHdPath(accountIndex)]
	});
};

export const restoreWallet = async (seedPhrase: string, accountIndex?: number): Promise<DirectSecp256k1HdWallet> => {
	return await DirectSecp256k1HdWallet.fromMnemonic(seedPhrase, { prefix: 'sei', hdPaths: [getHdPath(accountIndex)] });
};
