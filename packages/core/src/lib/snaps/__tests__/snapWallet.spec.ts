import { experimental_SEI_METAMASK_SNAP, getWallet, SnapWallet } from '../snapWallet';
import { sendReqToSnap } from '../cosmjs';

jest.mock('../cosmjs', () => {
	const originalModule = jest.requireActual('../cosmjs');

	return {
		...originalModule,
		sendReqToSnap: jest.fn()
	};
});

describe('SnapWallet', () => {
	it('should create a SnapWallet instance', () => {
		const privateKey = '0x0ca350a5d50a08caf95d0922d3adf4117a1ea5b7c24b7c6021173c8d46eceb37';
		const snapWallet = SnapWallet.create(privateKey);
		expect(snapWallet).toBeInstanceOf(SnapWallet);
	});

	it('should get accounts with expected data', () => {
		const privateKey = '0x0ca350a5d50a08caf95d0922d3adf4117a1ea5b7c24b7c6021173c8d46eceb37';
		const snapWallet = SnapWallet.create(privateKey);
		const accounts = snapWallet.getAccounts();
		expect(accounts.length).toBe(1);
		expect(accounts[0].address).toBe('sei15u8zs9pqdjddgv8pkyyh6zvsg4ujs2y6s6cq6u');
		expect(accounts[0].algo).toBe('secp256k1');
	});
});

describe('getWallet', () => {
	it('should create a SnapWallet instance via getWallet', async () => {
		const expectedBip44Node = {
			depth: 5,
			parentFingerprint: 567825211,
			index: 0,
			privateKey: '0x0ca350a5d50a08caf95d0922d3adf4117a1ea5b7c24b7c6021173c8d46eceb37',
			publicKey: '0x0405794d2d33a8a8c7e21caa891a9cb5b4539fb4c2fb50e46b326b322474ce719763ca0a0c869a87640289ebe4a2c008822059bbf7564129bafe51676abc53b921',
			chainCode: '0xf2a762ae70bddda87be9629e0be5857be287724fe6c5cc69c4c8cb1dcdccd089'
		};

		(sendReqToSnap as jest.Mock).mockResolvedValue(expectedBip44Node);

		const wallet = await getWallet();
		expect(wallet).toBeInstanceOf(SnapWallet);

		const expectedAccounts = [
			{
				address: 'sei15u8zs9pqdjddgv8pkyyh6zvsg4ujs2y6s6cq6u',
				algo: 'secp256k1',
				pubkey: new Uint8Array([
					3, 5, 121, 77, 45, 51, 168, 168, 199, 226, 28, 170, 137, 26, 156, 181, 180, 83, 159, 180, 194, 251, 80, 228, 107, 50, 107, 50, 36, 116, 206, 113, 151
				])
			}
		];

		const accountsResponse = wallet.getAccounts();
		expect(accountsResponse).toStrictEqual(expectedAccounts);
		expect(wallet.signAmino).toBeDefined();
		expect(wallet.signDirect).toBeDefined();
	});
});

describe('SEI_METAMASK_SNAP', () => {
	it('should have the expected properties and methods', () => {
		expect(experimental_SEI_METAMASK_SNAP.getAccounts).toBeDefined();
		expect(experimental_SEI_METAMASK_SNAP.connect).toBeDefined();
		expect(experimental_SEI_METAMASK_SNAP.disconnect).toBeDefined();
		expect(experimental_SEI_METAMASK_SNAP.getOfflineSigner).toBeDefined();
		expect(experimental_SEI_METAMASK_SNAP.getOfflineSignerAmino).toBeDefined();
		expect(experimental_SEI_METAMASK_SNAP.isMobileSupported).toBeTruthy();
	});
});
