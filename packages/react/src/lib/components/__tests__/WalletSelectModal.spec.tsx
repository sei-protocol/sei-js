// @ts-ignore
import React from 'react';
import { render } from '@testing-library/react';
import { WalletSelectModal } from '../WalletSelectModal';
import { SeiWalletContext } from '../../provider';
import { COMPASS_WALLET, FIN_WALLET, generateWallet, KEPLR_WALLET } from '@sei-js/core';
import '@testing-library/jest-dom';
import { createTestWallet } from '../../../../__mocks__/wallets';
import { DEFAULT_TEST_CONTEXT } from '../../../../__mocks__/context';

describe('WalletSelectModal', () => {
	it('should not render modal when showConnectModal is false', async () => {
		const generatedWallet = await generateWallet(12);

		const originalContext = {
			offlineSigner: generatedWallet,
			rpcUrl: 'https://rpc.atlantic-2.seinetwork.io',
			restUrl: 'https://rest.atlantic-2.seinetwork.io',
			chainId: 'atlantic-2',
			setConnectionError: jest.fn(),
			accounts: [],
			setTargetWallet: jest.fn(),
			showConnectModal: false,
			setShowConnectModal: jest.fn(),
			connect: jest.fn(),
			wallets: [],
			disconnect: jest.fn()
		};

		const { queryByTestId } = render(
			<SeiWalletContext.Provider value={originalContext}>
				<WalletSelectModal wallets={[]} />
			</SeiWalletContext.Provider>
		);

		expect(queryByTestId('modal__background')).toBeNull();
	});

	it('should render modal when showConnectModal is true', async () => {
		const offlineSigner = await generateWallet(12);

		const { queryByTestId } = render(
			<SeiWalletContext.Provider value={{ ...DEFAULT_TEST_CONTEXT, offlineSigner }}>
				<WalletSelectModal wallets={[]} />
			</SeiWalletContext.Provider>
		);

		expect(queryByTestId('modal__background')).toBeInTheDocument();
	});

	it('renders correct values from useQueryClient', async () => {
		const offlineSigner = await generateWallet(12);

		const { queryByTestId } = render(
			<SeiWalletContext.Provider
				value={{ ...DEFAULT_TEST_CONTEXT, offlineSigner, wallets: [COMPASS_WALLET, FIN_WALLET, KEPLR_WALLET, createTestWallet(offlineSigner)] }}>
				<WalletSelectModal />
			</SeiWalletContext.Provider>
		);

		expect(queryByTestId('compass')).toBeInTheDocument();
		expect(queryByTestId('fin')).toBeInTheDocument();
		expect(queryByTestId('keplr')).toBeInTheDocument();
		expect(queryByTestId('customWallet')).toBeInTheDocument();
		expect(queryByTestId('falcon')).not.toBeInTheDocument();
	});
});
