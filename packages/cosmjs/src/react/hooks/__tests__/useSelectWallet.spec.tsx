import * as React from 'react';
import { useContext } from 'react';
import { render } from '@testing-library/react';
import { useSelectWallet } from '../useSelectWallet';

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useContext: jest.fn()
}));

const TestComponent: React.FC = () => {
	const { openModal, closeModal } = useSelectWallet();
	openModal();
	closeModal();
	return <div />;
};

describe('useSelectWallet', () => {
	it('calls setShowConnectModal with correct arguments', () => {
		const setShowConnectModal = jest.fn();

		(useContext as jest.Mock).mockImplementation(() => ({
			setShowConnectModal
		}));

		render(<TestComponent />);

		expect(setShowConnectModal).toHaveBeenCalledWith(true);
		expect(setShowConnectModal).toHaveBeenCalledWith(false);
	});
});
