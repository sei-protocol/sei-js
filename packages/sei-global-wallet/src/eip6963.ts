import { registerEIP6963Provider } from './lib/EIP6963Emitter.js';

registerEIP6963Provider();

export {
	EIP6963Emitter,
	type EIP6963ProviderDetail,
	type EIP6963ProviderInfo,
	eip6963ProviderInfo,
	registerEIP6963Provider,
	unregisterEIP6963Provider
} from './lib/EIP6963Emitter.js';
