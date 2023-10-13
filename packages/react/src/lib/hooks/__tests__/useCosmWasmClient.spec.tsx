import * as React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import { useCosmWasmClient } from '../useCosmWasmClient';
import { SeiWalletProvider } from '../../provider';
import { ATLANTIC_2_CONFIG } from '../../../../__mocks__/context';

const TestComponent: React.FC = () => {
	const { isLoading, cosmWasmClient } = useCosmWasmClient();
	return (
		<div>
			<span>{`isLoading: ${isLoading}`}</span>
			<span>{`Client: ${cosmWasmClient}`}</span>
		</div>
	);
};

describe('useCosmWasmClient', () => {
	it('renders correct values from useCosmWasmClient', async () => {
		const { findByText } = render(
			<SeiWalletProvider chainConfiguration={ATLANTIC_2_CONFIG} wallets={['compass']}>
				<TestComponent />
			</SeiWalletProvider>
		);

		expect(await findByText('isLoading: true')).toBeInTheDocument();

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 3500));
		});

		expect(await findByText('isLoading: false')).toBeInTheDocument();
		expect(await findByText('Client: [object Object]')).toBeInTheDocument();
	});
});
