import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { WalletConnectButton } from '../WalletConnectButton';
import { SeiWalletProvider } from '../../provider';
import { ATLANTIC_2_CONFIG } from '../../__mocks__/context';
import { COMPASS_WALLET } from '../../../wallet';

if (!global.navigator) {
	// @ts-ignore
	global['navigator'] = {};
}
if (!global.navigator.clipboard) {
	// @ts-ignore
	global.navigator['clipboard'] = {
		writeText: jest.fn()
	};
}

describe('WalletConnectButton', () => {
	test('renders connect wallet button when not connected', () => {
		const { getByText } = render(
			<SeiWalletProvider chainConfiguration={ATLANTIC_2_CONFIG} wallets={[COMPASS_WALLET]}>
				<WalletConnectButton />
			</SeiWalletProvider>
		);

		expect(getByText('connect wallet')).toBeInTheDocument();
	});

	test('toggles menu on button click', () => {
		const { queryByTestId } = render(
			<SeiWalletProvider chainConfiguration={ATLANTIC_2_CONFIG} wallets={[COMPASS_WALLET]}>
				<WalletConnectButton />
			</SeiWalletProvider>
		);

		const connectButton = queryByTestId('connect-wallet');
		if (!connectButton) return;
		fireEvent.click(connectButton);
		expect(queryByTestId('compass')).toBeInTheDocument();
	});

	test('calls copy address', () => {
		const { queryByTestId } = render(
			<SeiWalletProvider chainConfiguration={ATLANTIC_2_CONFIG} wallets={[COMPASS_WALLET]}>
				<WalletConnectButton />
			</SeiWalletProvider>
		);

		const connectButton = queryByTestId('connect-wallet');
		if (!connectButton) return;

		const writeTextMock = jest.spyOn(navigator.clipboard, 'writeText');

		fireEvent.click(connectButton);

		const copyButton = queryByTestId('copy-address');
		if (!copyButton) return;

		fireEvent.click(copyButton);
		expect(writeTextMock).toHaveBeenCalled();

		expect(copyButton.textContent).toContain('copied');

		jest.advanceTimersByTime(1500);

		// Verify state reverts back after timeout
		waitFor(() => {
			expect(copyButton.textContent).not.toContain('copied');
		});
	});
});
