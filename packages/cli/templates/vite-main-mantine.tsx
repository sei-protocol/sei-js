// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@mantine/core/styles.css';

import { WalletProvider } from './providers/WalletProvider.tsx';

import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
	/** Put your mantine theme override here */
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MantineProvider theme={theme} defaultColorScheme='dark'>
			<WalletProvider>
				<App />
			</WalletProvider>
		</MantineProvider>
	</React.StrictMode>
);
