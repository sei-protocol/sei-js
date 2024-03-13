import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { WalletProvider } from './providers/WalletProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<WalletProvider>
			<App />
		</WalletProvider>
	</React.StrictMode>
);
