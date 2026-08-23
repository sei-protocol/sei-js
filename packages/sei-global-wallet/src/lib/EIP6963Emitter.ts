import { config } from './config.js';
import type { DataURIImage } from './dynamicClient.js';
import { createEIP1193Provider } from './dynamicEthereum.js';
import Wallet from './wallet.js';

export interface EIP6963ProviderInfo {
	icon: DataURIImage;
	name: string;
	rdns: string;
	uuid: string;
}

export interface EIP6963ProviderDetail {
	info: Readonly<EIP6963ProviderInfo>;
	provider: ReturnType<typeof createEIP1193Provider>;
}

export const eip6963ProviderInfo: Readonly<EIP6963ProviderInfo> = Object.freeze({
	icon: config.walletIcon,
	name: config.walletName,
	rdns: config.eip6963.rdns,
	uuid: config.eip6963.uuid
});

const noCleanup = () => {};
let activeCleanup: (() => void) | undefined;

export const registerEIP6963Provider = (): (() => void) => {
	if (typeof window === 'undefined' || typeof CustomEvent === 'undefined') return noCleanup;
	if (activeCleanup) return activeCleanup;

	const browserWindow = window;
	const detail: EIP6963ProviderDetail = Object.freeze({
		info: eip6963ProviderInfo,
		provider: createEIP1193Provider(Wallet)
	});
	const announceProvider = () => {
		browserWindow.dispatchEvent(
			new CustomEvent<EIP6963ProviderDetail>('eip6963:announceProvider', {
				detail
			})
		);
	};

	browserWindow.addEventListener('eip6963:requestProvider', announceProvider);

	let active = true;
	const cleanup = () => {
		if (!active) return;
		active = false;
		browserWindow.removeEventListener('eip6963:requestProvider', announceProvider);
		if (activeCleanup === cleanup) activeCleanup = undefined;
	};

	activeCleanup = cleanup;
	announceProvider();

	return cleanup;
};

export const unregisterEIP6963Provider = () => {
	activeCleanup?.();
};

// Kept for compatibility with the original internal helper name.
export const EIP6963Emitter = registerEIP6963Provider;
