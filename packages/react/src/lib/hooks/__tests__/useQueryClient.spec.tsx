import * as React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SeiWalletProvider } from '../../provider';
import { useQueryClient } from '../useQueryClient';
import { ATLANTIC_2_CONFIG } from '../../../../__mocks__/context';

const TestComponent: React.FC = () => {
	const { isLoading, queryClient } = useQueryClient();

	const isQueryClient = queryClient?.seiprotocol?.seichain !== undefined;

	return (
		<div>
			<span>{`isLoading: ${isLoading}`}</span>
			<span>{`isQueryClient: ${isQueryClient}`}</span>
		</div>
	);
};

describe('useQueryClient', () => {
	it('renders correct values from useQueryClient', async () => {
		const { findByText } = render(
			<SeiWalletProvider chainConfiguration={ATLANTIC_2_CONFIG} wallets={['compass']}>
				<TestComponent />
			</SeiWalletProvider>
		);

		expect(await findByText('isLoading: true')).toBeInTheDocument();

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0));
		});

		expect(await findByText('isLoading: false')).toBeInTheDocument();
		expect(await findByText('isQueryClient: true')).toBeInTheDocument();
	});
});
