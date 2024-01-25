import { SnapWallet } from '../snapWallet';
import { ACCOUNT_ONE_ADDRESS, ACCOUNT_ONE_PRIVATE_KEY } from './mocks/mocks';

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
