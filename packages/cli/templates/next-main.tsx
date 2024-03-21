// @ts-nocheck
import type { AppProps } from 'next/app';
import { WalletProvider } from '../src/providers/WalletProvider';

import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<WalletProvider>
			<Component {...pageProps} />
		</WalletProvider>
	);
}
