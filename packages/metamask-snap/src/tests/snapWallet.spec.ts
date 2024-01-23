import { getWallet, SnapWallet } from '../snapWallet';
import * as Utils from '../utils';
import { ACCOUNT_ONE_ADDRESS, ACCOUNT_ONE_PRIVATE_KEY, ACCOUNT_ONE_PUBKEY_BYTES, ACCOUNT_ONE_PUBLIC_KEY } from './mocks/mocks';

describe('SnapWallet', () => {
	it('should create a SnapWallet instance', () => {
		const privateKey = '0x0ca350a5d50a08caf95d0922d3adf4117a1ea5b7c24b7c6021173c8d46eceb37';
		const snapWallet = SnapWallet.create(privateKey);
		expect(snapWallet).toBeInstanceOf(SnapWallet);
	});

	it('should get accounts with expected data', () => {
		const snapWallet = SnapWallet.create(ACCOUNT_ONE_PRIVATE_KEY);
		const accounts = snapWallet.getAccounts();
		expect(accounts.length).toBe(1);
		expect(accounts[0].address).toBe(ACCOUNT_ONE_ADDRESS);
		expect(accounts[0].algo).toBe('secp256k1');
	});
});

describe('getWallet', () => {
	it('should create a SnapWallet instance via getWallet', async () => {
		const expectedBip44Node = {
			depth: 5,
			parentFingerprint: 567825211,
			index: 0,
			privateKey: ACCOUNT_ONE_PRIVATE_KEY,
			publicKey: ACCOUNT_ONE_PUBLIC_KEY,
			chainCode: '0xf2a762ae70bddda87be9629e0be5857be287724fe6c5cc69c4c8cb1dcdccd089'
		};

		const mock = jest.spyOn(Utils, 'sendReqToSnap');
		mock.mockResolvedValue(expectedBip44Node);

		const wallet = await getWallet(0, 'npm:@sei-js/metamask-snap');
		expect(wallet).toBeInstanceOf(SnapWallet);

		const expectedAccounts = [
			{
				address: ACCOUNT_ONE_ADDRESS,
				algo: 'secp256k1',
				pubkey: ACCOUNT_ONE_PUBKEY_BYTES
			}
		];

		const accountsResponse = wallet.getAccounts();
		expect(accountsResponse).toStrictEqual(expectedAccounts);
		expect(wallet.signAmino).toBeDefined();
		expect(wallet.signDirect).toBeDefined();
	});
});
