import { config } from './config.js';
import { createGlobalWalletClient, type GlobalWalletClient } from './dynamicClient.js';

const Wallet: GlobalWalletClient = createGlobalWalletClient({
	environmentId: config.environmentId,
	popup: {
		url: config.walletUrl
	}
});

export default Wallet;
