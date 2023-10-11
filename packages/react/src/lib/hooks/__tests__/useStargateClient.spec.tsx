// @ts-ignore
import React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SeiWalletProvider } from '../../provider';
import { useStargateClient } from '../useStargateClient';

const TestComponent: React.FC = () => {
	const { isLoading, stargateClient } = useStargateClient();

	const isStargateClient = stargateClient?.broadcastTx !== undefined;

	return (
		<div>
			<span>{`Is Loading: ${isLoading}`}</span>
			<span>{`isStargateClient: ${isStargateClient}`}</span>
		</div>
	);
};

describe('useStargateClient', () => {
	it('renders correct values from useStargateClient', async () => {
		const { findByText } = render(
			<SeiWalletProvider
				chainConfiguration={{ rpcUrl: 'https://rpc.atlantic-2.seinetwork.io', restUrl: 'https://rest.atlantic-2.seinetwork.io', chainId: 'atlantic-2' }}
				wallets={['compass']}>
				<TestComponent />
			</SeiWalletProvider>
		);

		expect(await findByText('Is Loading: true')).toBeInTheDocument();

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 3500));
		});

		expect(await findByText('Is Loading: false')).toBeInTheDocument();
		expect(await findByText('isStargateClient: true')).toBeInTheDocument();
	});
});
