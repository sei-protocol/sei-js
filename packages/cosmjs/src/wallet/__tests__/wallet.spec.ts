import { stringToPath } from '@cosmjs/crypto';
import { generateWallet, getHdPath, restoreWallet } from '../wallet';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

jest.mock('@cosmjs/proto-signing', () => {
	const originalModule = jest.requireActual('@cosmjs/proto-signing');

	return {
		...originalModule,
		DirectSecp256k1HdWallet: {
			...originalModule.DirectSecp256k1HdWallet,
			fromMnemonic: jest.fn(),
			generate: jest.fn()
		}
	};
});

describe('getHdPath', () => {
	it('should return the correct HdPath for default accountIndex', () => {
		const expectedStringPath = "m/44'/118'/0'/0/0";
		const expectedHdPath = stringToPath(expectedStringPath);

		const result = getHdPath();

		expect(result).toEqual(expectedHdPath);
	});

	it('should return the correct HdPath for a specified accountIndex', () => {
		const accountIndex = 7;
		const expectedStringPath = `m/44'/118'/0'/0/${accountIndex}`;
		const expectedHdPath = stringToPath(expectedStringPath);

		const result = getHdPath(accountIndex);

		expect(result).toEqual(expectedHdPath);
	});
});

describe('Wallet functions', () => {
	it('should generate a wallet', async () => {
		const mockWallet = {};
		(DirectSecp256k1HdWallet.generate as jest.Mock).mockResolvedValue(mockWallet);

		const wallet = await generateWallet(12, 0);

		expect(wallet).toBe(mockWallet);
		expect(DirectSecp256k1HdWallet.generate).toHaveBeenCalledWith(12, {
			prefix: 'sei',
			hdPaths: [getHdPath(0)]
		});
	});

	it('should generate a wallet with index 7', async () => {
		const mockWallet = {};
		(DirectSecp256k1HdWallet.generate as jest.Mock).mockResolvedValue(mockWallet);

		const wallet = await generateWallet(12, 7);

		expect(wallet).toBe(mockWallet);
		expect(DirectSecp256k1HdWallet.generate).toHaveBeenCalledWith(12, {
			prefix: 'sei',
			hdPaths: [getHdPath(7)]
		});
	});

	it('should restore a wallet from a seed phrase', async () => {
		const mockWallet = {};
		const seedPhrase = 'test seed phrase';

		(DirectSecp256k1HdWallet.fromMnemonic as jest.Mock).mockResolvedValue(mockWallet);

		const wallet = await restoreWallet(seedPhrase, 0);

		expect(wallet).toBe(mockWallet);
		expect(DirectSecp256k1HdWallet.fromMnemonic).toHaveBeenCalledWith(seedPhrase, {
			prefix: 'sei',
			hdPaths: [getHdPath(0)]
		});
	});
});
