import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { Root } from './Root';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Root>
			<App />
		</Root>
	</React.StrictMode>
);
