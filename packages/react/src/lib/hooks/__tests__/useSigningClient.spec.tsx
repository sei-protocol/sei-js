import * as React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { generateWallet } from '@sei-js/core';

import { useSigningClient } from '../useSigningClient';
import { SeiWalletContext } from '../../provider';
import { DEFAULT_TEST_CONTEXT } from '../../../../__mocks__/context';

describe('useSigningClient', () => {
	it('renders correct values from useSigningClient', async () => {
		const offlineSigner = await generateWallet(12);

		const TestComponent: React.FC = () => {
			const { isLoading, signingClient } = useSigningClient();
			return (
				<div>
					<span>{`isLoading: ${isLoading}`}</span>
					<span>{`Client: ${signingClient}`}</span>
				</div>
			);
		};

		const { findByText } = render(
			<SeiWalletContext.Provider value={{ ...DEFAULT_TEST_CONTEXT, offlineSigner }}>
				<TestComponent />
			</SeiWalletContext.Provider>
		);

		expect(await findByText('isLoading: true')).toBeInTheDocument();

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 3500));
		});

		expect(await findByText('isLoading: false')).toBeInTheDocument();
		expect(await findByText('Client: [object Object]')).toBeInTheDocument();
	});
});
