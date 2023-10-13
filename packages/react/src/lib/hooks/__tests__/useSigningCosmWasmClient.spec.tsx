import * as React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { generateWallet } from '@sei-js/core';

import { SeiWalletContext } from '../../provider';
import { useSigningCosmWasmClient } from '../useSigningCosmWasmClient';
import { DEFAULT_TEST_CONTEXT } from '../../../../__mocks__/context';

describe('useSigningCosmWasmClient', () => {
	it('renders correct values from useSigningCosmWasmClientClient', async () => {
		const offlineSigner = await generateWallet(12);

		const TestComponent: React.FC = () => {
			const { isLoading, signingCosmWasmClient } = useSigningCosmWasmClient();
			return (
				<div>
					<span>{`isLoading: ${isLoading}`}</span>
					<span>{`Client: ${signingCosmWasmClient}`}</span>
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
